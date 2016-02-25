var Fetch = require('whatwg-fetch');

var url = "http://api.openweathermap.org/data/2.5/forecast?APPID=e2f7f486750de9a85d21d956f10b7ca5&q=";

var wheatherApi = {
  getWheather: function(cityName){
    return fetch(url + cityName).then(function(response){
      return response.json();
    });
  }
}

module.exports = wheatherApi;
