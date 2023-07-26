import { CircularProgress } from '@mui/material';
import { Discipline, GradedCompetencies } from '../../Types/Data';
import styles from './StatsBanner.module.scss'
import { useDataWrapperContext } from '../../Contexts/DataWrapper/DataWrapper';

const CustomCircularProgress = ({label, completed, total}: {label: string, completed: number, total: number}): JSX.Element => {
    const percent = (completed / (total === 0 ? 1 : total) * 100);

    let colour;
    switch (true) {
        case (80 <= percent):
            colour = 'success'
            break
        case (50 <= percent):
            colour = 'warning'
            break
        case (50 >= percent):
            colour = 'error'
            break
    }

    return (
        <div className={styles.gradeContainer}>
            <CircularProgress variant="determinate" value={percent} thickness={8} size={50} color={colour as any}/>
            <span className={styles.label}>{label}: {completed}/{total} ({percent.toFixed(0)}%)</span>
        </div>
    )   
}

const StatsBanner = (): JSX.Element => {
    const { competencies, disciplineFilter } = useDataWrapperContext();

    const completed: GradedCompetencies = competencies.reduce((acc, curr) => {
        if (curr.checked && 
            (disciplineFilter === 'All' || 
            (disciplineFilter === 'engineering' && curr.discipline === Discipline.Engineering) ||
            (disciplineFilter === 'general' && curr.discipline === Discipline.General)
            )
        ) {
            acc[curr.grade].push(curr.competency)
        }

        return acc;
    }, {C1: [] as string[], C2: [] as string[], C3: [] as string[], C4: [] as string[]})

    return (
        <div className={styles.container}>
            {(Object.keys(completed) as (keyof GradedCompetencies)[]).map((key: keyof GradedCompetencies) => {
                const gradeTotal = competencies.filter((row) => {
                    if (disciplineFilter === 'All' || 
                        (disciplineFilter === 'engineering' && row.discipline === Discipline.Engineering) ||
                        (disciplineFilter === 'general' && row.discipline === Discipline.General)) {
                            return row.grade === key
                        }
                    return false;
                }).length
                return (
                    <CustomCircularProgress key={key} label={key} total={gradeTotal} completed={completed[key].length}/>
                );
            })}
        </div>
    )
}

export default StatsBanner;