import { useState,useEffect } from "react";
import axios from "axios";
import './style.css'
function WeatherReport(){
  const[weather,setWeather]=useState(null)
  const[city,setCity]=useState(null)
  
  useEffect(()=>{
    if(city!==null){
      
const baseURL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b4a62f4e11b255d75be2e4910acd5228"
      axios.get(baseURL).then((response)=>{
        console.log(response.data)
        setWeather(response.data)   
      }).catch((error)=>{
        setWeather(error.response.data)
      })
    }
  })
    const display=()=>{
    setCity(document.getElementById("cityName").value)
    }
  return(
    <div className="Display">
        <h1><font color="red">W</font>eather <font color="red">R</font>eport <font color="red">U</font>sing <font color="red">A</font>xios</h1>
    <input type="text" id="cityName" placeholder="Search here....."></input><br></br><br></br>
    <input type="button" onClick={display} value="Weather Report" id="Btn"></input>
    {weather!==null && 
    <>
    {weather.cod==="404" && "City Not Found"}  
    {weather.cod===200 && 
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <table border={2}>
      <tr>City Name<td>{weather.name}</td></tr>
      <tr>Weather Report<td>{weather.weather[0].main}</td></tr>
      <tr>Temperature<td>{weather.main.temp}<sup><small><font color="red">o</font></small></sup>C</td></tr>
      <tr>Status code<td>{weather.cod}</td></tr>
    </table>
</>
}
</>
}
    </div>
  )
}
export default WeatherReport


