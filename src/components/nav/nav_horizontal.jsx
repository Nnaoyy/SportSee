import {  NavLink } from "react-router-dom";


import "./nav_horizontal.scss" ;

function Horizontal (){

    return(
        <div className="horizontal">
            <div className="logo">
                <img src="/logo.png" alt="logo"/>
                <p>SportSee</p>
            </div>
            <div className="menu">
                <NavLink to="" className="link">Accueil</NavLink>
                <NavLink to="" className="link">Profil</NavLink>
                <NavLink to="" className="link">Réglage</NavLink>
                <NavLink to="" className="link">Communauté</NavLink>
            </div>
        </div>
    )
}

export default Horizontal;