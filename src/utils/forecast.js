const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url ="http://api.weatherstack.com/current?access_key=0309dd438c4b40bbfcf6a954d07b6812&query=" +latitude +"," +longitude +"&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined,body.current.weather_descriptions[0] +". It is currently " + body.current.temperature +" degress out. It feels like " +body.current.feelslike +" degrees out. The humidity is "+body.current.humidity+"%.");
    }
  });
};

module.exports = forecast;
