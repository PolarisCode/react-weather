var React = require('react');

var todayWheather = React.createClass({
  getCity: function(){
    if (this.props.info) {
      return (
        <div  className="col-md-8 col-md-offset-1 col-xs-8 col-xs-offset-1">
          {this.props.info.city.name}, {this.props.info.city.country}
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
