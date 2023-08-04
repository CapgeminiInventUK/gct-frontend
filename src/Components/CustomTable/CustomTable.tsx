import { useEffect, useState } from 'react';
import { visuallyHidden } from '@mui/utils';
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
  Paper,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
} from '@mui/material';
import { Discipline, GradedCompetencies, TableData } from '../../Types/Data';
import EvidenceAndNotes from './EvidenceAndNotes/EvidenceAndNotes';
import styles from './CustomTable.module.scss';
import { useDataWrapperContext } from '../../Contexts/DataWrapper/DataWrapper';
import { GRADES } from '../../Utils/globals';
import Filters from './Filters/Filters';

type Order = 'asc' | 'desc';

function stableSort(array: TableData[], orderBy: keyof TableData, order: Order) {
  return array.sort((a, b) => {
    return order === 'asc' ? ((a[orderBy] ?? '') < (b[orderBy] ?? '') ? -1 : 1) : (a[orderBy] ?? '') < (b[orderBy] ?? '') ? 1 : -1;
  });
}

interface HeadCell {
  id: keyof TableData;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'grade',
    label: 'Grade',
  },
  {
    id: 'competency',
    label: 'Competency',
  },
  {
    id: 'evidence',
    label: 'Evidence',
  },
  {
    id: 'notes',
    label: 'Notes',
  },
];

interface TableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TableData) => void;
  order: Order;
  orderBy: string;
}

function CustomTableHead(props: TableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={styles.tableHead}>
      <TableRow>
        <TableCell padding="checkbox" />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const CustomTable = (): JSX.Element => {
  const [checkedFilter, setCheckedFilter] = useState('All');
  const [gradeFilter, setGradeFilter] = useState<(keyof GradedCompetencies)[]>([...GRADES]);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof TableData>('grade');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const { competencies, userDetails, setCompetencies, disciplineFilter, setDisciplineFilter } =
    useDataWrapperContext();

  useEffect(() => {
    if (userDetails) {
      const gradeIndex = GRADES.indexOf(userDetails.grade as keyof GradedCompetencies);
      setGradeFilter([...GRADES].slice(gradeIndex));
      setDisciplineFilter(userDetails.engineer ? 'engineering' : 'general');
    }
  }, [setDisciplineFilter, userDetails]);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof TableData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filterRows = (rows: TableData[]): TableData[] => {
    return rows
      .filter((row) => {
        if (disciplineFilter === 'All') {
          return true;
        } else if (disciplineFilter === 'general') {
          return row.discipline === Discipline.General;
        } else if (disciplineFilter === 'engineering') {
          return row.discipline === Discipline.Engineering;
        }
        return true;
      })
      .filter((row) => {
        if (checkedFilter === 'All') {
          return true;
        } else if (checkedFilter === 'checked') {
          return row.checked;
        } else if (checkedFilter === 'notChecked') {
          return row.checked === false;
        }
        return true;
      })
      .filter((row) => gradeFilter.includes(row.grade));
  };

  const handleClick = (
    event: React.MouseEvent<unknown>,
    grade: keyof GradedCompetencies,
    competency: string
  ) => {
    setCompetencies((prevValue) => {
      const newCompetencies = [...prevValue];
      const index = newCompetencies.findIndex(
        (row) => row.competency === competency && row.grade === grade
      );
      if (index !== -1) {
        newCompetencies[index] = {
          ...newCompetencies[index],
          checked: !newCompetencies[index].checked,
        };
        localStorage.setItem(`user_data_${userDetails.email}`, JSON.stringify(newCompetencies));
      }
      return newCompetencies;
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - competencies.length) : 0;

  const filteredRows = filterRows([...competencies]);
  const visibleRows = stableSort(filteredRows, orderBy, order).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Filters
          disciplineFilter={disciplineFilter}
          checkedFilter={checkedFilter}
          gradeFilter={gradeFilter}
          setDisciplineFilter={setDisciplineFilter}
          setCheckedFilter={setCheckedFilter}
          setGradeFilter={setGradeFilter}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'small'}>
            <CustomTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={row.checked}
                    tabIndex={-1}
                    key={`${row.grade}-${row.competency}`}
                    selected={row.checked}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={row.checked}
                        onClick={(event) => handleClick(event, row.grade, row.competency)}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.grade}
                    </TableCell>
                    <TableCell>{row.competency}</TableCell>
                    <EvidenceAndNotes row={row} />
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 50, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default CustomTable;
