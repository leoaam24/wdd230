const weatherInfo = document.querySelector('.weather-info');
if (weatherInfo){
  const tempValue = document.querySelector('#temp-value');
  const weatherImg = document.querySelector('#weatherImg');
  const weatherCond = document.querySelector('#weather-condition');
  const weatherHumid = document.querySelector('#humidity');
//   const windSpeed = document.querySelector('#wind-speed');

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=2a4b1a24eb793a6e0322abadb8e01f64&units=metric';
  const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&cnt=25&appid=2a4b1a24eb793a6e0322abadb8e01f64&units=metric';
  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  async function apiFetch2() {
    try {
      const response = await fetch(url2);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        addResults(data);;
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();
apiFetch2()


function displayResults(weatherData) {
  tempValue.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const humid = weatherData.main.humidity;

  weatherHumid.textContent = `Humidity: ${humid}%`;
  weatherCond.innerHTML = `${desc}`;
  weatherCond.textContent = weatherCond.textContent.replace(/\b\w/g, c => c.toUpperCase());
  weatherImg.setAttribute('src', iconsrc);
  weatherImg.setAttribute('srcset', '');
  weatherImg.setAttribute('alt', 'weather-icon');
//   windSpeed.textContent = windspeed;
  


const tempValueNumber = document.querySelector("#temp-value").textContent;
// const windSpeedNumber = document.querySelector("#wind-speed").textContent;
const windChill = document.querySelector("#wind-chill");
const tempCtoF = (tempValueNumber * 9/5) + 32;
// const windSpeedMph = (windSpeedNumber*2.23694);

if (tempCtoF <= 50 && windSpeedMph > 3) {
    const windChillFormula = (35.74 + (0.6215 * tempCtoF )) - (35.75 * (windSpeedMph ** 0.16)) + (0.4275 * tempCtoF * (windSpeedMph ** 0.16));
    // const windChillWatt = (12.1452 + (11.6222 * (Math.sqrt(windSpeedMph))) - (1.16222 * windSpeedMph)) * (33 - tempCtoF);
    const windChilltoC = (windChillFormula - 32) * 5/9;
    windChill.textContent = `${windChilltoC.toFixed(2)} ºC`;
} else {
    // windChill.textContent = "N/A";
}
}

function addResults(weatherData){
  const forecast = document.querySelector('#forecast');
  const weatherlist = weatherData.list;
  const tomorrowforecast = weatherlist[8];
  const dayaftertomorrowforecast = weatherlist[16];
  const dayafterthenextdayforecast = weatherlist[24];
  const iconsrctomorrow = `https://openweathermap.org/img/w/${tomorrowforecast.weather[0].icon}.png`;
  const iconsrcdayaftertomorrow = `https://openweathermap.org/img/w/${dayaftertomorrowforecast.weather[0].icon}.png`;
  const iconsrcdayafterthenextday = `https://openweathermap.org/img/w/${dayafterthenextdayforecast.weather[0].icon}.png`;
  

  let tomorrow = document.createElement('span');
  let dayaftertomorrow = document.createElement('span');
  let dayafterthenextday = document.createElement('span');
  let tomorrowico = document.createElement('img');
  let dayaftertomorrowico = document.createElement('img');
  let dayafterthenextdayico = document.createElement('img');

  let tomorrowtemp = document.createElement('p');
  let dayaftertomorrowtemp = document.createElement('p');
  let dayafterthenextdaytemp = document.createElement('p');

  forecast.appendChild(tomorrow);
  forecast.appendChild(dayaftertomorrow);
  forecast.appendChild(dayafterthenextday);

  tomorrow.appendChild(tomorrowico);
  tomorrow.appendChild(tomorrowtemp);
  dayaftertomorrow.appendChild(dayaftertomorrowico);
  dayaftertomorrow.appendChild(dayaftertomorrowtemp);
  dayafterthenextday.appendChild(dayafterthenextdayico);
  dayafterthenextday.appendChild(dayafterthenextdaytemp);
  tomorrowico.setAttribute('src', iconsrctomorrow);
  tomorrowico.setAttribute('alt', 'weathercondition icon');
  dayaftertomorrowico.setAttribute('src', iconsrcdayaftertomorrow);
  dayaftertomorrowico.setAttribute('alt', 'weathercondition icon');
  dayafterthenextdayico.setAttribute('src', iconsrcdayafterthenextday);
  dayafterthenextdayico.setAttribute('alt', 'weathercondition icon');
  
  
  tomorrowtemp.innerHTML = `<strong>${timestamptomonth(tomorrowforecast.dt)} ${timestamptodate(tomorrowforecast.dt)}</strong> ${tomorrowforecast.main.temp_min}ºC / ${tomorrowforecast.main.temp_max}ºC`;
  dayaftertomorrowtemp.innerHTML = `<strong>${timestamptomonth(dayaftertomorrowforecast.dt)} ${timestamptodate(dayaftertomorrowforecast.dt)}</strong> ${dayaftertomorrowforecast.main.temp_min}ºC / ${dayaftertomorrowforecast.main.temp_max}ºC`;
  dayafterthenextdaytemp.innerHTML = `<strong>${timestamptomonth(dayafterthenextdayforecast.dt)} ${timestamptodate(dayafterthenextdayforecast.dt)}</strong> ${dayafterthenextdayforecast.main.temp_min}ºC / ${dayafterthenextdayforecast.main.temp_max}ºC`;
  

  function timestamptodate(timestamp) {
    let tempdate = new Date(timestamp * 1000);
    return tempdate.getDate();
  }

  function timestamptomonth(timestamp){
    let tempdate = new Date(timestamp * 1000);
    return tempdate.toLocaleDateString('default', { month: 'long'});
  }
  
}

const closeWeather = document.querySelector('.close-weather');
const openWeather = document.querySelector('.open-weather');
const openWeatherCard = document.querySelector('.open-weather-card');
const weatherContainer = document.querySelector('.weather-container');
const weatherCard = document.querySelector('.weather-card');
const closeWeatherCard = document.querySelector('.close-weather-card');

closeWeather.addEventListener('click', ()=>{
    weatherContainer.style.width = "0%";
    openWeatherCard.style.display = 'flex';
    openWeather.style.display = "flex";
    tempValue.style.opacity = "0%";
    weatherCond.style.opacity = "0%";
})

openWeather.addEventListener('click', ()=>{
    weatherContainer.style.width = '100%';
    openWeatherCard.style.display = 'none';
    openWeather.style.display = "none";
    tempValue.style.opacity = "100%";
    closeWeatherCard.style.opacity = "100%";
    weatherCond.style.opacity = "100%";
})

}