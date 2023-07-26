import { ChangeEvent, useState } from 'react';
import { TableCell } from '@mui/material';
import TextBox from '../../TextBox/TextBox';
import { TableData } from '../../../Types/Data';
import { useDataWrapperContext } from '../../../Contexts/DataWrapper/DataWrapper';

const EvidenceAndNotes = ({ row }: { row: TableData }): JSX.Element => {
  const { competency, grade, evidence, notes } = row;
  const [active, setActive] = useState(false);

  const { userDetails, setCompetencies } = useDataWrapperContext();

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>, evidenceOrNotes: string) => {
    setCompetencies((prevValue) => {
      const newCompetencies = [...prevValue];
      const index = newCompetencies.findIndex(
        (row) => row.competency === competency && row.grade === grade
      );
      if (index !== -1) {
        if (evidenceOrNotes === 'evidence') {
          newCompetencies[index] = { ...newCompetencies[index], evidence: e.target.value };
        }

        if (evidenceOrNotes === 'notes') {
          newCompetencies[index] = { ...newCompetencies[index], notes: e.target.value };
        }

        localStorage.setItem(`user_data_${userDetails.email}`, JSON.stringify(newCompetencies));
      }
      return newCompetencies;
    });
  };

  return (
    <>
      <TableCell align="right">
        <TextBox
          defaultValue={evidence}
          active={active}
          setActive={setActive}
          handleOnChange={(e) => handleOnChange(e, 'evidence')}
        />
      </TableCell>
      <TableCell align="right">
        <TextBox
          defaultValue={notes}
          active={active}
          setActive={setActive}
          handleOnChange={(e) => handleOnChange(e, 'notes')}
        />
      </TableCell>
    </>
  );
};

export default EvidenceAndNotes;
