var React = require('react');
var Input = require("./Input.react");
var InputContainer= require("./InputContainer.react");
var Form = React.createClass({
   
   
  render: function() {
     
      var fields=this.props.formFields.map(function(field){
          return <Input {...field} {...this.props.actions}/>
      }.bind(this));
    return (
            <div>
                <form>
                    {fields}
                </form>
            </div>
        );
  }
});
module.exports=Form;