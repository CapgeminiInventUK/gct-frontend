import { createContext, useContext, useEffect, useState } from "react"
import { DataWrapperContextProps, TableData, UserDetails } from "../../Types/Data";
import { defaultData } from "../../Data/Competencies";

export const DataWrapperContext = createContext<DataWrapperContextProps>({} as DataWrapperContextProps);

export const useDataWrapperContext = (): DataWrapperContextProps => {
    return useContext(DataWrapperContext);
};

const DataWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
    const [disciplineFilter, setDisciplineFilter] = useState('All')
    const [competencies, setCompetencies] = useState<TableData[]>([])
    const [userDetails, setUserDetails] = useState<UserDetails>({
        email: '',
        grade: '',
        engineer: false,
      })

      useEffect(() => {
        const userData = localStorage.getItem(`user_data_${userDetails.email}`);
        if (userData) {
            setCompetencies(JSON.parse(userData))
        } else {
            setCompetencies(defaultData);
        }
    }, [userDetails]);

    const value = {
        competencies,
        setCompetencies,
        userDetails,
        setUserDetails,
        disciplineFilter,
        setDisciplineFilter
    };

    return (
        <DataWrapperContext.Provider value={value}>
            {children}
        </DataWrapperContext.Provider>
    )
}

export default DataWrapper;