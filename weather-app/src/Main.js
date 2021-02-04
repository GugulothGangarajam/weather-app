import React,{useState} from 'react';
import "./index.css";
const api={
        key:"764806918b515ca8446f89ea1fcf41f2",
        base:"https://api.openweathermap.org/data/2.5/"
      }

function Main() {
        
  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});
  const [searching, setSearching] = useState(false);
  const [darkMode,setDarkMode]=useState(false);
  // const [{user},dispatch]=useStateValue();
/*searching*/
  const search = evt =>{
    if(evt.key === "Enter"){
      setSearching(true);
      const getData = () => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setSearching(false);
          setQuery('');
          // console.log(result);
        })
      }
        getData();
      // },3000);
      // async function fetchData(){
      // const response=await axios.get(`weather?q=${query}&units=metic&APPID=${api.key}`);
      //   setQuery('');
      //   setSearching(false);
      //   setWeather(response);
      //   console.log(response);
      //   return response;
      // }
      // fetchData();
      
    }
  }
  /*dateBuilder*/
  const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July","August","September","October",
    "November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };





        return (
                <div>
                    <div className={
        (typeof weather.main != "undefined")?((weather.main.temp<16)?'app app__cool':'app app__warm'):'app app__default'
      }>
        <main className={darkMode ? 'darkmode':""} >
          <div className="search-box">
          <input className="search-bar"
            type="text"
             placeholder="search any city..."
             onChange={e => setQuery(e.target.value)}
             value={query}
             onKeyPress={search}
          />
          {/* <div className="toggle-container">
            <span className="toggle">
                <input
                  checked={darkMode} 
                  onChange={()=>setDarkMode(prevMode => !prevMode)}
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox"/>
            </span>
          </div> */}
          <label class="switch">
             <input type="checkbox" checked={darkMode}
                onChange={()=>setDarkMode(prevMode => !prevMode)}
             />
             <span class="slider round"></span>
          </label>
          </div>
          {searching && <div className="loading app"></div>}
          {(typeof weather.main !="undefined")?(
            <div>
              <div className="location-box">
              <div className="location">{weather.name},{weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">
                    {weather.weather[0].main}
                </div>
            </div>
            </div>
          ):('')}
        </main>
      </div>    
                </div>
        )
}

export default Main;
