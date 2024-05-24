import "./nav_horizontal.scss" ;

function Horizontal (){

    return(
        <div className="horizontal">
            <div className="logo">
                <img src="/logo.png" alt="logo"/>
                <p>SportSee</p>
            </div>
            <div className="menu">
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </div>
        </div>
    )
}

export default Horizontal;