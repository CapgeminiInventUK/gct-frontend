import { ChangeEvent, useState } from 'react';
import { TableCell } from '@mui/material';
import TextBox from '../../TextBox/TextBox';
import { TableData } from '../../../Types/Data';
import { useDataWrapperContext } from '../../../Contexts/DataWrapper/DataWrapper';
import postUser from '../../../Api/postUser';

const EvidenceAndNotes = ({ row }: { row: TableData }): JSX.Element => {
  const { competency, grade, evidence, notes } = row;
  const [active, setActive] = useState(false);

  const { setCompetencies, userEmail } = useDataWrapperContext();

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>, evidenceOrNotes: string): void => {
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

        const userCompetencies = newCompetencies.map((comp) => ({
          competencyId: comp.id,
          checked: comp.checked,
          evidence: comp.evidence,
          notes: comp.notes,
        }))
        postUser(userCompetencies, userEmail)
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
          handleOnChange={(event): void => handleOnChange(event, 'evidence')}
        />
      </TableCell>
      <TableCell align="right">
        <TextBox
          defaultValue={notes}
          active={active}
          setActive={setActive}
          handleOnChange={(event): void => handleOnChange(event, 'notes')}
        />
      </TableCell>
    </>
  );
};

export default EvidenceAndNotes;
