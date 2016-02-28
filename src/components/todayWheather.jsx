var React = require('react');
var api = require('../wheatherService');

var todayWheather = React.createClass({
  getCity: function(){
    if (this.props.info) {
      return (
        <div>
          <div className="row">
            <div className="col-md-8 col-md-offset-1 col-xs-8 col-xs-offset-1">
              {this.props.info.name}, {this.props.info.sys.country}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-xs-offset-1">
              <h3>{Math.round(this.props.info.main.temp - 273.15)} C</h3>
            </div>
            <div className="col-xs-3">
              <img style={{height:80}} src={api.getImageUrl(this.props.info.weather[0].icon)}/>
            </div>
            <div className="col-xs-3">
              <h3>W: {this.props.info.wind.speed} m/s</h3>
            </div>
          </div>
        </div>
      );
    }
  },
  render: function(){
    return (
      <div className="row">
        {this.getCity()}
      </div>
    );
  }
});

module.exports = todayWheather;
