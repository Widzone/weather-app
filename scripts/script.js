const apiKey = "0ca9ba42152af5451baaf58482af4cbe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
  const response = await fetch(`${apiUrl}&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
}

checkWeather();