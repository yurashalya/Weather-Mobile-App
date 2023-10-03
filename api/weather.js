import axios from "axios";
import {API_KEY} from "@env";

const forecastEndpoint = params=> `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params.cityName || "London"}&days=${params.days}`;
const locationsEndpoint = params=> `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.cityName || "London"}`;

const getWeather = async (endpoint)=>{
    const options = {
        method: 'GET',
        url: endpoint,
    };

      try{
        const response = await axios.request(options);
        return response.data;
      }catch(error){
        return {};
    }
}

export const fetchWeatherForecast = params=>{
    let forecastUrl = forecastEndpoint(params);
    return getWeather(forecastUrl);
}

export const fetchLocations = params=>{
    let locationsUrl = locationsEndpoint(params);
    return getWeather(locationsUrl);
}
