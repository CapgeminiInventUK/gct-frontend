import { Checkbox, MenuItem, Select } from '@mui/material';
import { GradedCompetencies } from '../../../Types/Data';
import styles from './Filters.module.scss';

const Filters = ({
  disciplineFilter,
  checkedFilter,
  gradeFilter,
  setDisciplineFilter,
  setCheckedFilter,
  setGradeFilter,
}: {
  disciplineFilter: string;
  checkedFilter: string;
  gradeFilter: (keyof GradedCompetencies)[];
  setDisciplineFilter: React.Dispatch<React.SetStateAction<string>>;
  setCheckedFilter: React.Dispatch<React.SetStateAction<string>>;
  setGradeFilter: React.Dispatch<React.SetStateAction<(keyof GradedCompetencies)[]>>;
}): JSX.Element => {
  const handleSetGradeFilter = (grade: keyof GradedCompetencies): void => {
    setGradeFilter((prevValue) => {
      const newGradeFilter = [...prevValue];
      const index = newGradeFilter.indexOf(grade);
      if (index !== -1) {
        newGradeFilter.splice(index, 1);
      } else {
        newGradeFilter.push(grade);
      }
      return newGradeFilter;
    });
  };

  return (
    <div>
      <div className={styles.filters}>
        <Select
          value={disciplineFilter}
          onChange={(event): void => setDisciplineFilter(event.target.value)}
        >
          <MenuItem value={'All'}>General and engineering</MenuItem>
          <MenuItem value={'general'}>Only general</MenuItem>
          <MenuItem value={'engineering'}>Only engineering</MenuItem>
        </Select>

        <Select
          value={checkedFilter}
          onChange={(event): void => setCheckedFilter(event.target.value)}
        >
          <MenuItem value={'All'}>Checked and unchecked</MenuItem>
          <MenuItem value={'checked'}>Only checked</MenuItem>
          <MenuItem value={'notChecked'}>Only unchecked</MenuItem>
        </Select>

        <div>
          C1{' '}
          <Checkbox
            color="info"
            checked={gradeFilter.includes('C1')}
            onChange={(): void => handleSetGradeFilter('C1')}
          />
          C2{' '}
          <Checkbox
            color="info"
            checked={gradeFilter.includes('C2')}
            onChange={(): void => handleSetGradeFilter('C2')}
          />
          C3{' '}
          <Checkbox
            color="info"
            checked={gradeFilter.includes('C3')}
            onChange={(): void => handleSetGradeFilter('C3')}
          />
          C4{' '}
          <Checkbox
            color="info"
            checked={gradeFilter.includes('C4')}
            onChange={(): void => handleSetGradeFilter('C4')}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
