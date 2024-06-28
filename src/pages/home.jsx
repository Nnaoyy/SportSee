import DailyActivities from "../components/DailyActivities";
import Datas from "../components/datas";
import Hello from "../components/hello";
import RadarStrength from "../components/radar";
import Score from "../components/score";
import Session from "../components/session";
import { getUser, getActivity, getAverageSessions, getPerformance } from "../services/dataService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


import "./home.scss";

function Home (){

    const { id } = useParams();
    let userId = id ? id : 12;
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [sessionData, setSessionData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [error, setError] = useState()
  
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
            console.log(error);
            setError(error);
            navigate('/error');
          }
        }
    
         fetchData();
      }, [userId]);
  
     
  
    if (!userData || !activityData || !sessionData || !performanceData){
        return <div>Loading...</div>;
    } 
    
    return(        
            <div className="home">
                <Hello name={userData.userInfos.firstName}/>
                <div className="dashboard">
                <div className="graph">
                    <DailyActivities activityData={activityData.sessions}/>
                    <div className="bottom">
                        <Session sessionData={sessionData.sessions}/>
                        <RadarStrength data={performanceData.data} kind={performanceData.kind} />
                        <Score user={userData}/>
                    </div>                   
                </div>
                <Datas keyData={userData.keyData}/>
                </div>
            </div>
    )
   
}

export default Home;