import React, { useEffect, useState } from "react";
import WEATHER from "../../../API/Weather";

// style
import './weather.scss'

// icons
import clear_day from "../../../assets/icons/weather/clear-icon.png"
import clear_night from "../../../assets/icons/weather/clear-night-icon.png"
import few_day from "../../../assets/icons/weather/few-clouds-icon.png"
import few_night from "../../../assets/icons/weather/few-clouds-night-icon.png"
import clouds_day from "../../../assets/icons/weather/clouds-icon.png"
import clouds_night from "../../../assets/icons/weather/clouds-night-icon.png"
import shower from "../../../assets/icons/weather/shower-rain-icon.png"
import rain_day from "../../../assets/icons/weather/rain-day-icon.png"
import rain_night from "../../../assets/icons/weather/rain-night-icon.png"
import thunderstorm from "../../../assets/icons/weather/thunderstorms-icon.png"
import snow from "../../../assets/icons/weather/snow-icon.png"
import mist from "../../../assets/icons/weather/mist-icon.png"

import loadings from '../../../assets/images/loading.svg'

export default function AsideWeather() {

  const citys = ["Tashkent", "Andijon", "Buhara", "Farg'ona", "Jizzax","Namangan","Navoiy","Qashqadaryo","Karakalpakstan","Samarqand","Termiz","Xiva",]

  const [data, setData] = useState({})
  const [city, setCity] = useState(0)
  const [loading, setLoading] = useState(false)


  const weatherHandler = async () => {
    try{
      setLoading(false)
      const { data } = await WEATHER.weather(citys[city])
      setData(data)
      setLoading(true)
    } catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    weatherHandler()
  }, [city])

  if (!loading) {
    return <div className="aside__weather"><img className="loading" src={loadings} alt="laoding" width="72" height={72}/></div>
  }

  return (
    data.main && (
      <div className="aside__weather">
        <div className="aside__weather-box">
          <ul className="aside__weather-hlist">
            <li className="aside__weather-hitem">{data.name}</li>
          </ul>
          <div className="aside__weather-btnbox">
            <button onClick={()=> setCity(city-1)} disabled={city === 0} className={`aside__weather-hbtn ${city === 0 ? "aside__weather-opacity": ""}`}><i className='bx bx-chevron-left'></i></button>
            <button onClick={()=> setCity(city+1)} disabled={citys.length -1 === city} className={`aside__weather-hbtn ${citys.length -1 === city ? "aside__weather-opacity" : ""}`}><i className='bx bx-chevron-right'></i></button>
          </div>
        </div>

        <ul className="aside__weather-list">
          <li className="aside__weather-item">
            <div className="aside__weather-bbox">
              <p className="aside__weather-celsiy">{Math.round(data.main.temp_max)}&deg;c / {Math.round(data.main.temp_min)}&deg;c</p>
            </div>
            {
              data.weather[0].icon == '01d' ? <img src={clear_day} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '01n' ? <img src={clear_night} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '02d' ? <img src={few_day} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '02n' ? <img src={few_night} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '03d' ? <img src={clouds_day} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '03n' ? <img src={clouds_night} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '04d' ? <img src={clouds_day} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '04n' ? <img src={clouds_night} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '09d' ? <img src={shower} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '09n' ? <img src={shower} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '10d' ? <img src={rain_day} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '10n' ? <img src={rain_night} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '11d' ? <img src={thunderstorm} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '11n' ? <img src={thunderstorm} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '13d' ? <img src={snow} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '13n' ? <img src={snow} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '50d' ? <img src={mist} alt={data.weather[0].description} width="72" height="72" /> : data.weather[0].icon == '50n' ? <img src={mist} alt={data.weather[0].description} width="72" height="72" /> : ""
            }
          </li>
        </ul>
      </div>
    )
  )

}