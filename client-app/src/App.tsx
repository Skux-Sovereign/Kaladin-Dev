import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import axios from 'axios'
import ActivityDashboard from './features/activities/dashboard/ActivityDashboard'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>Kaladin</h1>
        <ActivityDashboard activities={activities} />
      </ThemeProvider>
    </>
  )
}

export default App
