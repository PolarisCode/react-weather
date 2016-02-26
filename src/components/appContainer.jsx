var React = require('react');
var TopContainer = require('./topContainer.jsx');
var Forecast = require('./forecast.jsx');
var api = require('../wheatherService');

var appContainer = React.createClass({
  getInitialState: function(){
    return {todayWheather :null, forecast: null, city: ""}
  },
  searchWheather: function(){

    var city = this.refs.today.refs.searchCity.state.value;

    this.setState({city:city});

    api.getTodayWheather(city).then(
      function(result){
        if (result) {
          this.setState({todayWheather:result});

          api.getForecast(city).then(
            function(result){
              if (result) {

                this.setState({forecast:result});
              }
          }.bind(this));
        }
    }.bind(this));
  },
  render: function(){
    return (
      <div>
        <TopContainer onChange={this.searchWheather} todayWheather = {this.state.todayWheather} ref="today"/>
        <Forecast forecast = {this.state.forecast} />
      </div>
    )
  }
});

module.exports = appContainer;
