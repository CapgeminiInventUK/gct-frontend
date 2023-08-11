import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import CustomTable from '../../Components/CustomTable/CustomTable';
import StatsBanner from '../../Components/StatsBanner/StatsBanner';
import DataWrapper from '../../Contexts/DataWrapper/DataWrapper';

const CompetencyTracker = (): JSX.Element => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('user_details');
    navigate('/');
  };

  const [email, grade, engineer] = localStorage.getItem('user_details')?.split(',') ?? ['','','']

  return (
    <DataWrapper>
      <Box>
        <Box padding={1} textAlign={'right'}>
          <Typography variant="body1">
          Logged in as {email}, {grade}
            {engineer === 'True' ? ', Engineer' : ''}
          </Typography>
          <Button onClick={logoutHandler}>Logout</Button>
        </Box>
        <StatsBanner />
        <CustomTable />
      </Box>
    </DataWrapper>
  );
};

export default CompetencyTracker;
