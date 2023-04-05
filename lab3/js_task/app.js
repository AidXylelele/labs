const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=YOUR_API_KEY&units=metric"
    );
    const weatherData = response.data;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    res.send(
      `The temperature in Kyiv is ${temperature}°C with ${description}.`
    );
  } catch (error) {
    console.error(error);
    res.send("An error occurred while fetching weather data.");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
