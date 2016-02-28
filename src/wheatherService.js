var Fetch = require('whatwg-fetch');

var baseUrl = "http://api.openweathermap.org/data/2.5/";
var currentWheatherUrl = baseUrl + "weather?APPID=e2f7f486750de9a85d21d956f10b7ca5&q=";
var forecastUrl = baseUrl + "forecast?APPID=e2f7f486750de9a85d21d956f10b7ca5&q=";
var imageUrl = "http://openweathermap.org/img/w/";

function Validate(response){
  var obj = response.json();
  if (obj.cod === '404') {
      alert(obj.message);
      return null;
  }
  else{
      return obj;
  }
}

var wheatherApi = {
  getForecast: function(cityName){
    return fetch(forecastUrl + cityName).then(function(response){
        return Validate(response);
    });
  },
  getTodayWheather: function(cityName){
    return fetch(currentWheatherUrl + cityName).then(function(response){
      return Validate(response);
    });
  },
  getImageUrl: function(imageId){
    return imageUrl + imageId + ".png";
  }
}

module.exports = wheatherApi;
