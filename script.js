const container = document.querySelector(".container");
const loader = document.querySelector(".loader");
container.style.backgroundImage =
  "url('https://www.acceptmission.com/wp-content/uploads/2023/08/blue-sky-1639540-scaled.jpg.webp')";
container.style.backgroundSize = "cover";
container.style.backgroundRepeat = "no-repeat";
container.style.backgroundPosition = "center";

async function getLocation() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  const latitude = data.latitude;
  const longitude = data.longitude;
  const city = data.city;
  setTimeout(() => {
    getWeather(city, latitude, longitude);
  }, 1500);
}
async function getWeather(city, latitude, longitude) {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&current_weather=true"
  );
  const data = await res.json();
  loader.classList.toggle("none");
  const weatherCode = data.current_weather.weathercode;
  const temperature = data.current_weather.temperature;
  const windSpeed = data.current_weather.windspeed;
  const windDirection = data.current_weather.winddirection;

  let code = "";
  let background = "";
  switch (weatherCode) {
    case 0:
      code = "clear sky";
      container.style.backgroundImage = "url('https://i.gifer.com/Lx0q.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";

      break;
    case 1:
      code = "Mainly clear ☀";
      container.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGlvMHBmdGlyc2YzNWk3cjFjdHoxYzlyNDh2Ym1mZmFzeTZnd2dpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xlk4JrwQE7XEs/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 2:
      code = "Partly cloudy ⛅";
      container.style.backgroundImage =
        "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZyZWNpYWp3aDg1dWoxcXZtYW91YjE2bzZ6ZzZ5MHY5YW03bXp3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PIh4laWJlz9bq/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 3:
      code = "Overcast ☁";
      container.style.backgroundImage =
        "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWpyNDM0dGFleXYycHlxMHV2NWVlNnBheXIzdDU2enRlbjNmYmYzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JOMTYlr1b2HlxGXyoS/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 45:
      code = "Fog 🌫";
      document.body.style.backgroundImage =
        "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHpzZnZydTAwMWhteDIwempkaGZhOWdzcnY5amo1bTc0NHpqb3B0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZWRCWdUymIGNW/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 48:
      code = "Depositing rime fog 🌫";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHR3ZmhxZ2dkcG4ybXB3aWxqN2VmeXNuNW55ZnBjOGtxaWI1dnNhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IuKnqFMhtcA2A/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 51:
      code = "Drizzle: Light 🌧";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmhpMTZxNW41c3E1MmFwb2llN3Y5NW8yOTA2dGRpanRuM3o1eTZwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jtoTdx6Wf1rPUvCmnd/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 53:
      code = "Drizzle: moderate 🌧";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVyNzF0OTNvY3UzNHh0dGY1amY5Y2o3M3poandzanBkeWIzeWh5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTcnT8PuKl5GBz26mk/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 55:
      code = "Drizzle: dense intensity 🌧";
      document.body.style.backgroundImage =
        "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ252eDU2dWZiODRjb3BmNDkyaWlwMHgwb3F1a2Vnc2k3cDdpamJ2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PN23U6cVRWFFe/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 56:
      code = "Freezing Drizzle : Light 🌨";
      document.body.style.backgroundImage =
        "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnI1bmprOHJ5MXhrYWpkZGd6b2oyYm16MjJtZjM5ZXp4cTZuMTYzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gi8rysr4t3nO95Gz2F/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 57:
      code = "Freezing Drizzle : dense intensity 🌨";
      document.body.style.backgroundImage =
        "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVmYWU2NHU2NDN5bWdsY3l2YXVtaWk2bWtsdWsyZmdjMmQ3cHVpNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kDWxi2T9YRIpJ9Xfze/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 61:
      code = "Rain: Slight 🌧";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWU5bnBsdG16Njk0dTFkbzN4d2xkNmo4anV4eHl3MDE1ZW1ocDc2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/exfSTanP4prYQ/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 63:
      code = "Rain: moderate 🌧";
      document.body.style.backgroundImage =
        "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHNmeDJsc2pib21nNXE2M2pzbXExeW8waWxhZnM3aDJ2bHc3eGwwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oSaLJmbUgZQm4/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 65:
      code = "Rain: heavy intensity 🌧";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGdicXg2ZHhvbWM2aHRoYTM3ajJwbXZxbjZiNXp2a3NranVqMWdqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k82Anx1tym207I5zaK/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 66:
      code = "Freezing Rain: Light ❄🌨🌧";
      document.body.style.backgroundImage =
        "url('https://pa1.aminoapps.com/6407/a8a995bda7c5606a5ecb9ceff61b9de1f35670b2_hq.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 67:
      code = "Freezing Rain: heavy intensity ❄🌨🌧";
      document.body.style.backgroundImage =
        "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2o2djVsanUxemJjZDg4bzE5ZTdoZzZnbWRyN3c4NG53bGhvZ2RucSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d1UsC2IHNAmi8ugRTc/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 71:
      code = "Snow fall: Slight 🌨";
      document.body.style.backgroundImage =
        "url('https://i0.wp.com/djedwardson.com/wp-content/uploads/2014/01/snowFall-animated.gif?resize=500%2C281&ssl=1')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 73:
      code = "Snow fall: moderate 🌨";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNkN2JibnpmNHl5cXgzcXl5YjAyYnl0empsdHR0OHoyMDR1dmc2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N7ZiLbtDr84Yo/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 75:
      code = "Snow fall: heavy intensity 🌨";
      document.body.style.backgroundImage =
        "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2MxbGx3cHgybzh3bnl2eXhuYTkzYWJwNTZuNjBqMW1ycG1rMnZwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o9OwkG1z0veIU/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 77:
      code = "Snow grains 🌨";
      document.body.style.backgroundImage =
        "url('https://i.gifer.com/Cba.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 80:
      code = "Rain showers: slight 🌧";
      document.body.style.backgroundImage =
        "url('https://www.icegif.com/wp-content/uploads/2021/11/icegif-706.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 81:
      code = "Rain showers: moderate 🌧";
      document.body.style.backgroundImage =
        "url('https://www.icegif.com/wp-content/uploads/2023/03/icegif-526.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 82:
      code = "Rain showers: violent 🌧";
      document.body.style.backgroundImage =
        "url('https://www.icegif.com/wp-content/uploads/2023/04/icegif-741.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 85:
      code = "Snow showers slight 🌨🌨";
      document.body.style.backgroundImage =
        "url('https://media.tenor.com/NsMpl6LpjNkAAAAM/snow-snowing.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 86:
      code = "Snow showers heavy 🌨🌨";
      document.body.style.backgroundImage =
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnpzenNseWFjeHc0ZmxrcHQ2bW5kNGE5b2Yzb3VmdHN2NDVpZXZlMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uJKhQMZ1wLfO/giphy.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 95:
      code = "Thunderstorm: Slight or moderate 🌩";
      document.body.style.backgroundImage =
        "url('https://i.gifer.com/iIK.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 96:
      code = "Thunderstorm with slight hail ⚡🌩";
      document.body.style.backgroundImage =
        "url('https://i.gifer.com/9v6y.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    case 99:
      code = "Thunderstorm with heavy hail ⚡🌩";
      document.body.style.backgroundImage =
        "url('https://i.gifer.com/K0I2.gif')";
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      break;
    default:
      code = "Неизвестная погода";
      document.body.style.backgroundImage = "url('')";
      break;
  }

  const h2 = document.createElement("h2");
  h2.textContent = city;
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p.textContent = `Weather conditions: ${code} `;
  p1.textContent = `Temperature: ${temperature} C°`;
  p2.textContent = `Wind speed ${windSpeed} km/h `;
  p3.textContent = `Wind direction ${windDirection} °`;
  container.append(h2, p, p1, p2, p3);
  console.log(city, code, temperature, windSpeed, windDirection);
}

getLocation();
