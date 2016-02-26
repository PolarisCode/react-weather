var React = require('react');


var forecast = React.createClass({
  showForecast: function(){
    if (this.props.forecast) {
      return <div>{JSON.stringify(this.props.forecast)}</div>
    }
    else{
      return <div> no data </div>
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
