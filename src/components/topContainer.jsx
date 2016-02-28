var React = require('react');
var SearchCity = require('./searchCity.jsx');
var TodayWheather = require('./todayWheather.jsx');

var todayStyle = {
  background: '#00CC66',
  color: 'white',
  height:'200'
}


var topContainer = React.createClass({

  render: function(){
    return (
      <div style={todayStyle} className="row">
        <SearchCity searchCallback={this.props.onChange} ref="searchCity"/>
        <TodayWheather info = {this.props.todayWheather}/>
      </div>
    )
  }
});


module.exports = topContainer;
