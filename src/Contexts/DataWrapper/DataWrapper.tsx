import { createContext, useContext, useEffect, useState } from 'react';
import { DataWrapperContextProps, TableData } from '../../Types/Data';
import getUser from '../../Api/getUser';
import { getUserDetails } from '../../Utils/localStorage';
import getCompetencies from '../../Api/getCompetencies';
import getUserCompetencies from '../../Data/Competencies';

export const DataWrapperContext = createContext<DataWrapperContextProps>(
  {} as DataWrapperContextProps
);

export const useDataWrapperContext = (): DataWrapperContextProps => {
  return useContext(DataWrapperContext);
};

const DataWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [disciplineFilter, setDisciplineFilter] = useState('All');
  const [competencies, setCompetencies] = useState<TableData[]>([]);
  const [userEmail, setUserEmail] = useState<string>();

  useEffect(() => {
    const { email } = getUserDetails();
    setUserEmail(email);
    getUser(email).then(async (data) => {
      const competenciesList = await getCompetencies();
      setCompetencies(getUserCompetencies(data.data.userCompetencies, competenciesList.data))
    });
  }, []);

  const value = {
    competencies,
    setCompetencies,
    userEmail,
    setUserEmail,
    disciplineFilter,
    setDisciplineFilter,
  };

  return <DataWrapperContext.Provider value={value}>{children}</DataWrapperContext.Provider>;
};

export default DataWrapper;
