var React = require('react');
var ForecastItem = require('./forecastItem.jsx');


var forecast = React.createClass({
  showForecast: function(){
    if (this.props.forecast) {
      return (
        <div>
          <table className="table">
            <tbody>
              {this.props.forecast.list.map(function(day){
                return <ForecastItem key={day.dt} item ={day}/>
              })}
            </tbody>
          </table>
        </div>
      )
    }
    else{
      return <div> <h4>Please, search for forecast</h4></div>
    }
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
            {this.showForecast()}
        </div>
      </div>
    )
  }
});


module.exports = forecast;
