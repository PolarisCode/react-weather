var React = require('react');

var borderStyle = {
  border: '2, solid',
  borderRadius: 25,
  marginTop:10
}


var searchCity = React.createClass({
  getInitialState: function(){
    return {value: ""}
  },
  onChange: function(e){
    this.setState({value:e.target.value});
  },
  render: function(){
    return (
      <div className="row">
      <div className="col-md-8 col-sm-8 col-xs-8 col-xs-offset-2">
        <div className="form-group col-md-8 col-sm-8 col-xs-8">
          <input type="text" className="form-control" placeholder="Search..."
          onChange={this.onChange} style={borderStyle} value={this.state.value}/>
        </div>
        <button onClick={this.props.searchCallback} className="btn btn-primary col-md-4 col-sm-4 col-xs-4" style={borderStyle}> Search </button>
      </div>
      </div>
    )
  }
});

module.exports = searchCity;
