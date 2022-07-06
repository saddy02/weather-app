import { useEffect, useState } from "react";
import Card from "./Card";
import { API_KEY } from "../Assets/config";
import { backgrounds } from "../Assets/background"
import Footer from "./Footer";
import Result from "./Result";
import list from "../Assets/city.list.json"


const App = () => {

  let [query, setQuery] = useState("Fergana")
  let [input, setInput] = useState('')
  let [data, setData] = useState()
  let [style, setStyle] = useState({})
  
  const setBackground = (condition) => {
    if (condition.includes('sunny')) setStyle(backgrounds.sunny)
    else if (condition.includes('cloudy') || condition.includes('overcast')) setStyle(backgrounds.cloudy)
    else if (condition.includes('mist')) setStyle(backgrounds.mist)
    else if (condition.includes('snow')) setStyle(backgrounds.snow)
    else if (condition.includes('rain')) setStyle(backgrounds.rain)
    else setStyle(backgrounds.other)
    return style
  }
  
  const fetched = (data) => {
    if (data.error) return
    setData(data)
    setBackground(data.current.condition.text.toLowerCase())
  } 

  useEffect(()=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`
    fetch(url)
      .then(res => res.json())
      .then(pre => fetched(pre))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  onkeydown = ( {key} ) => {
    if (key === "Enter") setQuery(input)
  }

  return (
    <div className="App" style={ style }>
      { input ? <Result list={list} input={input} setQuery={setQuery} /> : <div className="empty"></div> }
      <input 
        type="search"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search..."
        />
      { data ? <Card data={data} /> : <h1> Loading... </h1> }
      <Footer />
    </div>
  );
}
export default App;