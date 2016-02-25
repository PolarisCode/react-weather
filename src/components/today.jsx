var React = require('react');
var SearchCity = require('./searchCity.jsx');
var api = require('../wheatherService');

var todayStyle = {
  background: 'green',
  color: 'white',
  height:'250'
}


var today = React.createClass({
  searchWheather: function(){

    var city = this.refs.searchCity.state.value;

    api.getWheather(city).then(
      function(result){
        if (result.cod === '404') {
          alert(result.message);
        }
        else {
          console.log(result);
        }
    });
  },
  render: function(){
    return (
      <div style={todayStyle} className="row">
        <SearchCity searchCallback={this.searchWheather} ref="searchCity"/>
      </div>
    )
  }
});


module.exports = today;
