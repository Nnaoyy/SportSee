import DailyActivities from "../components/DailyActivities";
import Datas from "../components/datas";
import Hello from "../components/hello";
import RadarStrength from "../components/radar";
import Score from "../components/score";
import Session from "../components/session";



import "./home.scss";

function Home ({userData, activityData, sessionData, performanceData}){
   

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