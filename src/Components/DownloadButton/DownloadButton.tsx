import { Button } from "@mui/material"
import { Discipline, TableData } from "../../Types/Data";
import { useDataWrapperContext } from "../../Contexts/DataWrapper/DataWrapper";


const convertToCsv = (data: TableData[], disciplineFilter: string): string => {
    const output: string[] = ['Completed,Grade,Competency,Evidence,Notes']
    data.forEach((row) => {
        if (disciplineFilter === 'All' || 
            (disciplineFilter === 'engineering' && row.discipline === Discipline.Engineering) ||
            (disciplineFilter === 'general' && row.discipline === Discipline.General))
        {
            output.push(
                `${row.checked ? 'Yes' : 'No'},${row.grade},"${row.competency}","${row.evidence}","${row.notes}"`
            )
        }
    })

    return output.join('\n')
}

const DownloadButton = ({ competencies }: {competencies: TableData[]}): JSX.Element => {
    const { disciplineFilter } = useDataWrapperContext();

    const handleClick = () => {
        const csvData = convertToCsv(competencies, disciplineFilter)

        const data = new Blob([csvData], {type: 'text/csv'});
        const csvURL = window.URL.createObjectURL(data);

        const tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'Competencies.csv');
        tempLink.click();
    }
    return (
        <Button onClick={handleClick}>Download as CSV</Button>
    )
}

export default DownloadButton