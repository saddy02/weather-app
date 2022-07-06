const Card = ( {data} ) => {
    return ( 
        <div className="card glass">
            <div className="header">
                <h1> {data.current.temp_c}&#xb0; </h1>
                <img width={128} src={data.current.condition.icon} alt={data.current.condition.text} /> 
            </div>
                <span className="city"> {data.location.name}, {data.location.country} </span>
                <div className="data">
                <span id="text"> {data.current.condition.text} </span>
                <span> humid: {data.current.humidity}% </span>
                <span> wind speed: {data.current.wind_mph} m/h </span>
            </div>
        </div>
    );
}

export default Card;