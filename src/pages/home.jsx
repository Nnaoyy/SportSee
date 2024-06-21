import DailyActivities from "../components/DailyActivities";
import Datas from "../components/datas";
import Hello from "../components/hello";
import RadarStrength from "../components/radar";
import Score from "../components/score";
import Session from "../components/session";

import { getUser, getActivity, getAverageSessions, getPerformance } from "../services/api";
import { useEffect, useState } from "react";

import "./home.scss";

function Home (){
    const id = 12;

    
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [sessionData, setSessionData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
  
    useEffect(() => {
        async function fetchData() {
          try {
            const userData = await getUser(id);
            setUserData(userData);
            
            const activityData = await getActivity(id);
            setActivityData(activityData);

            const sessionData = await getAverageSessions(id);
            setSessionData(sessionData);

            const performanceData = await getPerformance(id);
            setPerformanceData(performanceData);
  
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
         fetchData();
      }, [id]);
  
     
    console.log(performanceData)

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