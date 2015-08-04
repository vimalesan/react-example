var React = require('react');
var Input = React.createClass({
  render: function() {
    return (
            <div>
                <label>{this.props.id}</label>
                <input type="text" name={this.props.id} value={this.props.value} id={this.props.id} onChange={this.props.onChange}/>
                
            </div>
        );
  }
});
module.exports=Input;