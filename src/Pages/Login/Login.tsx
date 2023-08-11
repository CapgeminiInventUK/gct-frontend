import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, MenuItem, Select, Switch, TextField, Typography } from '@mui/material';
import { GRADES } from '../../Utils/globals';
import styles from './Login.module.scss';
import { setUserDetails } from '../../Utils/localStorage';

const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<boolean>();

  const [grade, setGrade] = useState('');
  const [gradeError, setGradeError] = useState<boolean>();

  const [engineer, setEngineer] = useState(false);

  const submitForm = (): void => {
    if (email.length < 5) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (grade === '') {
      setGradeError(true);
    } else {
      setGradeError(false);
    }

    if (!(email.length < 5) && !(grade === '')) {
      setUserDetails(email, grade, engineer)
      navigate('/tracker');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user_details')) {
      navigate('/tracker');
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./invent_logo.png" alt="Invent logo" />
      <Typography variant="h2">Grade Competency Tracker</Typography>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <Typography variant="h5" color={emailError ? 'red' : 'black'}>
            Email
          </Typography>
          <TextField onChange={(event): void => setEmail(event.target.value)} value={email} />
        </div>
        <div className={styles.formItem}>
          <Typography variant="h5" color={gradeError ? 'red' : 'black'}>
            Current grade
          </Typography>
          <Select
            sx={{ width: '75px' }}
            onChange={(event): void => setGrade(event.target.value)}
            value={grade}
          >
            {GRADES.map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles.formItem}>
          <Typography variant="h5">Are you an engineer?</Typography>
          <div className={styles.toggle}>
            <Typography variant="body1">No</Typography>
            <Switch
              onChange={(event): void => setEngineer(event.target.checked)}
              value={engineer}
            />
            <Typography variant="body1">Yes</Typography>
          </div>
        </div>
      </div>
      <Button variant="contained" onClick={submitForm}>
        <Typography variant="h6">Login</Typography>
      </Button>
    </div>
  );
};

export default Login;
