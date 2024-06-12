export default async function getCurrentWeather(locationCoords){

    const axios = require('axios')

    const lat = locationCoords.latitude
    
    const log = locationCoords.longitude

    var results = []

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=b1cb353ede1ac118495531c6f889b079`)
        .then(function (response){

            const data = response.data     
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const temperatureMin = data.main.temp_min
            const temperatureMax = data.main.temp_max
            const wind = data.wind.speed
            const humidity = data.main.humidity
            const currentTemperature = data.main.temp
            
            results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            // [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            
        })
        .catch(function (error) {
            console.log(error)
        })

    return results
  }