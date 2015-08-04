var React = require('react');
var Input = React.createClass({
  change:function(event){
    this.props.onChange(this.props.id,event.target.value);
  },
  render: function() {
    var field=this.props;
    console.dir("rerender");
    return (
            <div>
                <label>{field.id}</label>
                <input type="text" name={field.id} value={field.value} id={field.id} onChange={this.change}/>
                
            </div>
        );
  }/*,
  shouldComponentUpdate:function(np,ns){
    if(np.value!=this.props.value)
    {
      return true;
    }
    else{
      return false;
    }
  }*/
});
module.exports=Input;