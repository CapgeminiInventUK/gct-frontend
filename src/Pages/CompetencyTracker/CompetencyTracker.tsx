import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import StatsBanner from "../../Components/StatsBanner/StatsBanner";
import { TableData } from "../../Types/Data";
import { useNavigate } from "react-router-dom";
import { useDataWrapperContext } from "../../Contexts/DataWrapper/DataWrapper";
import DownloadButton from "../../Components/DownloadButton/DownloadButton";

const CompetencyTracker = (): JSX.Element => {
  const navigate = useNavigate();

  const { userDetails: { email, grade, engineer}, setCompetencies, setUserDetails, competencies } = useDataWrapperContext()

  const logoutHandler = () => {
    localStorage.removeItem('user_details');
    navigate('/')
  }

  useEffect(() => {
    const userDetails = localStorage.getItem('user_details')
    if (!userDetails) {
      navigate('/');
      return;
    }

    const [email, grade, engineer] = userDetails.split(',');
    setUserDetails({
      email,
      grade,
      engineer: engineer === 'true',
    })
    

    const userData = localStorage.getItem(`user_data_${email}`)
    if (userData) {
      const userDataObject: TableData[] = JSON.parse(userData);
      setCompetencies(userDataObject)

    }
  }, [navigate, setCompetencies, setUserDetails])

  return (
    <Box>
      <Box padding={1} textAlign={'right'}>
        <Typography variant="body1">Logged in as {email}, {grade}{engineer ? ', Engineer' : ''}</Typography>
        <DownloadButton competencies={competencies} />
        <Button onClick={logoutHandler}>Logout</Button>
      </Box>
      <StatsBanner />
      <CustomTable />
    </Box>
  );
}
  
export default CompetencyTracker;