import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import axios from 'axios'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import NavBar from './NavBar';
import { Patient } from '../models/patient';
import BottomNavBar from './BottomNavBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import RegisterForm from '../../features/activities/form/PatientForm';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [activities, setActivities] = useState<Patient[]>([])

  useEffect(() => {
    axios.get<Patient[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/" element={<ActivityDashboard activities={activities} />} />
          <Route path="/newPatientForm" element={<RegisterForm />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
