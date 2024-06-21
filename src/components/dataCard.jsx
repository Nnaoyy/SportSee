import"./dataCard.scss"

export default function DataCard ({name, value, unit, img}) {



    return (
        <div className="dataCard">
            <img src={img} alt={name}/>
            <div>
                <h2>{value}{unit}</h2>
                <p>{name}</p>
            </div>
            
        </div>
);

}