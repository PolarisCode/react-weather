var React = require('react');
var SearchCity = require('./searchCity.jsx');
var TodayWheather = require('./todayWheather.jsx');

var todayStyle = {
  background: 'green',
  color: 'white',
  height:'250'
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
