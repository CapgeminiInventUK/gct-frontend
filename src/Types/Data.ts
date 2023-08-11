export enum Discipline {
  General,
  Engineering,
}

export interface Competency {
  id: number;
  grade: keyof GradedCompetencies;
  competency: string;
  discipline: number;
}

export interface User {
  email: string;
  userCompetencies: UserCompetency[];
}

export interface UserCompetency {
  competencyId: number;
  checked: boolean;
  evidence: string;
  notes: string;
}

export interface TableData {
  id: number;
  checked: boolean;
  grade: keyof GradedCompetencies;
  competency: string;
  evidence: string;
  notes: string;
  discipline: Discipline;
}

export interface GradedCompetencies {
  C1: string[];
  C2: string[];
  C3: string[];
  C4: string[];
}

export interface UserDetails {
  email?: string;
  grade?: string;
  engineer?: boolean;
}

export interface DataWrapperContextProps {
  competencies: TableData[];
  setCompetencies: React.Dispatch<React.SetStateAction<TableData[]>>;
  userEmail?: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  disciplineFilter: string;
  setDisciplineFilter: React.Dispatch<React.SetStateAction<string>>;
}
