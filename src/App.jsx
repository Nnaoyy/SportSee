
import Home from './pages/home'
import Horizontal from './components/nav/nav_horizontal'
import Vertical from './components/nav/nav_vertical'
import { getUser, getActivity, getAverageSessions, getPerformance } from "./services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './App.css'

function App() {

  const { id } = useParams();
  let userId = id ? id : 12;

  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
      async function fetchData() {
        try {
          const userData = await getUser(userId);
          setUserData(userData);
          
          const activityData = await getActivity(userId);
          setActivityData(activityData);

          const sessionData = await getAverageSessions(userId);
          setSessionData(sessionData);

          const performanceData = await getPerformance(userId);
          setPerformanceData(performanceData);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
       fetchData();
    }, [userId]);

   

  if (!userData || !activityData || !sessionData || !performanceData){
      return <div>Loading...</div>;
  } 
  return (
    <>
      <Horizontal/>
      <div className='screen'>
        <Vertical/>
        <Home
          userData={userData}
          activityData={activityData}
          sessionData={sessionData}
          performanceData={performanceData}
        />
      </div>
      
    </>
  )
}

export default App
