var React = require('react');
var Input = require("./Input.react");
var InputContainer= require("./InputContainer.react");
var Form = React.createClass({
   
   
  render: function() {
      var formFields=this.props.formFields;
     var keys=Object.keys(formFields);
      var fields=keys.map(function(key){
          var field=formFields[key];
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