import DailyActivities from "../components/DailyActivities";
import Hello from "../components/hello";
import RadarStrength from "../components/radar";
import Score from "../components/score";
import Session from "../components/session";
import { USER_MAIN_DATA} from "../datas/data";

import "./home.scss";

function Home (){
    let userId = 12;
    const foundUser = USER_MAIN_DATA.find(user =>  user.id === userId)
    if (!foundUser){
        return (
            <div>la personne n'a pas été trouvée</div>
        )
    }
    const name = foundUser.userInfos.firstName;
    return(        
            <div className="home">
                <Hello name={name}/>
                <div className="graph">
                    <DailyActivities/>
                    <div className="bottom">
                        <Session/>
                        <RadarStrength/>
                        <Score/>
                    </div>                   
                </div>
            </div>
    )
   
}

export default Home;