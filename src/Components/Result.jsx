const Result = ({list, input, ...props}) => {
    
    let filtered = list.filter( e => e.name.toLowerCase().includes(input.toLowerCase()) )
    filtered = filtered.slice(0, 10)
    function showResult(object){
        props.setQuery(`${object.coord.lat} ${object.coord.lon}`)
    }

    return ( 
        <div className="result glass">
            {
                filtered.map(e => <div key={e.id} onClick={()=>{showResult(e)}}> {e.name} </div>)
            }
        </div>
    );
}

export default Result;