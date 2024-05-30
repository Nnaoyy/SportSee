import DaylyActivities from "../components/DaylyActivities";
import Hello from "../components/hello";
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
            <div className="test">
                <Hello name={name}/>
                <div>
                    <DaylyActivities/>
                </div>
            </div>
    )
   
}

export default Home;