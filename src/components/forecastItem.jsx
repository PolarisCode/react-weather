var React = require('react');
var dateFormat = require('dateformat');

var iconUrl = "http://openweathermap.org/img/w/";

var forecastItem = React.createClass({
  render: function(){
    return (
      <tr>
        <td>
        {
          dateFormat(this.props.item.dt_txt, "mmmm d, HH:MM:ss")
        }
        </td>
        <td>
          <img src={iconUrl + this.props.item.weather[0].icon + ".png"}/>
        </td>
        <td>
          {Math.round(this.props.item.main.temp - 273.15)} C
        </td>
        <td>
          W: {this.props.item.wind.speed} m/s
        </td>
      </tr>
    );
  }
});

module.exports = forecastItem;
