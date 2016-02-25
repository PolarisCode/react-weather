var React = require('react');
var Today = require('./today.jsx');
var AllDays = require('./allDays.jsx');

var appContainer = React.createClass({
  render: function(){
    return (
      <div>
        <Today/>
        <AllDays/>
      </div>
    )
  }
});

module.exports = appContainer;
