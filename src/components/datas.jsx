import DataCard from "./dataCard";
import calories from "../assets/calories.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";
import proteines from "../assets/proteines.svg";

import "./datas.scss"

export default function Datas ({keyData}) {

    return (
        <div className="datas">
            <DataCard name="Calories" value={keyData.calorieCount} unit="kCal" img={calories}/>
            <DataCard name="Proteines" value={keyData.proteinCount} unit="g" img={proteines}/>
            <DataCard name="Glucides" value={keyData.carbohydrateCount} unit="g" img={glucides}/>
            <DataCard name="Lipides" value={keyData.lipidCount} unit="g" img={lipides}/>
        </div>
);

}
