const API_KEY = `0fe5b4de11b42b35e7dd5ec40bb0d3f6`;
const SearchTemperature = () => {
    const CityInput = document.getElementById('search-city');
    const CityName = CityInput.value;
    CityInput.value = '';
    
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}&units=metric`;
  //  console.log(API_URL);
    fetch(API_URL)
    .then(response => response.json())
    .then(data => DisplayTemperature(data))  

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const DisplayTemperature = (temperature) => {
    console.log(temperature);
    setInnerText('city-name', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('description', temperature.weather[0].main);

    //set weather icon
    const icon_url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    // console.log(icon_url);
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', icon_url);

   
}