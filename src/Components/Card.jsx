const Card = ( {data} ) => {
    return ( 
        <div className="card glass">
            <div>
                <h1> {data.current.temp_c} &#8451; </h1>
                <span className="city"> {data.location.name}, {data.location.country} </span>
            </div>
            <div className="data">
                <img src={data.current.condition.icon} alt={data.current.condition.text} /> 
                <span id="text"> {data.current.condition.text} </span>
                <span> humid: {data.current.humidity}% </span>
                <span> wind speed: {data.current.wind_mph} m/h </span>
            </div>
        </div>
    );
}

export default Card;