var React = require('react');
var dateFormat = require('dateformat');
var api = require('../wheatherService');

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
          <img src={api.getImageUrl(this.props.item.weather[0].icon)}/>
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
