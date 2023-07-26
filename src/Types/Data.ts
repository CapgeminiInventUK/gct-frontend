export enum Discipline {
  General,
  Engineering
}

export interface TableData {
    checked: boolean,
    grade: keyof GradedCompetencies,
    competency: string,
    evidence: string,
    notes: string,
    discipline: Discipline,
  }

export interface GradedCompetencies {
    C1: string[],
    C2: string[],
    C3: string[],
    C4: string[],
  }

export interface UserDetails {
  email: string,
  grade: string,
  engineer: boolean,
}

export interface DataWrapperContextProps {
  competencies: TableData[],
  setCompetencies: React.Dispatch<React.SetStateAction<TableData[]>>
  userDetails: UserDetails,
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>
  disciplineFilter: string
  setDisciplineFilter: React.Dispatch<React.SetStateAction<string>>
}