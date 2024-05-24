import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";

import "./nav_vertical.scss";

function Vertical (){

    return(
        <>
            <div className="vertical">
                <div className="icons">
                    <img src={icon1} alt="icon1"/>
                    <img src={icon2} alt="icon2"/>
                    <img src={icon3} alt="icon3"/>
                    <img src={icon4} alt="icon4"/>
                </div>
                <p className="copiryght">Copiryght, SportSee 2020</p>
            </div>
        </>
    )
}

export default Vertical;