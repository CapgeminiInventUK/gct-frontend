import { Competency, TableData, UserCompetency } from "../Types/Data";

const getUserCompetencies = (userCompetencies: UserCompetency[], competencies: Competency[]): TableData[] => {
    return competencies.reduce((acc, curr) => {
        const matchedCompetency = userCompetencies.find((userCompetency) => userCompetency.competencyId === curr.id)

        console.log(curr, matchedCompetency)

        acc.push({
            id: curr.id,
            checked: matchedCompetency?.checked ?? false,
            grade: curr.grade,
            competency: curr.competency,
            evidence: matchedCompetency?.evidence ?? '',
            notes: matchedCompetency?.notes ?? '',
            discipline: curr.discipline,
        })
        return acc;
    }, [] as TableData[])
}

export default getUserCompetencies;