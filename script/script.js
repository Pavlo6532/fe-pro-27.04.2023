"use strict";

function getWeather(city) {
  const apiKey = "5d066958a60d315387d9492393935c19";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherData = {
        city: data.name,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
        icon: data.weather[0].icon,
      };

      displayWeather(weatherData);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function displayWeather(weatherData) {
  document.getElementById("city").textContent = weatherData.city;
  document.getElementById(
    "temperature"
  ).textContent = `${weatherData.temperature}°C`;
  document.getElementById(
    "pressure"
  ).textContent = `${weatherData.pressure} hPa`;
  document.getElementById("description").textContent = weatherData.description;
  document.getElementById("humidity").textContent = `${weatherData.humidity}%`;
  document.getElementById(
    "wind"
  ).textContent = `${weatherData.windSpeed} m/s, ${weatherData.windDeg}°`;
  document.getElementById(
    "icon"
  ).src = `http://openweathermap.org/img/w/${weatherData.icon}.png`;
}

const city = "LVIV";
getWeather(city);
