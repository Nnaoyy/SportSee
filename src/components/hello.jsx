
import "./hello.scss";

function Hello ({name}){

    return(
        <>
            <div>
                <div className="hello"> 
                    <h1>Bonjour</h1>
                    <h1 className="name">{name}</h1>
                </div>
                <p className="congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </>
    )
}

export default Hello;