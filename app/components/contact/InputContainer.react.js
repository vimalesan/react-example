var React = require('react');

var ContactStore=require("../../stores/ContactStore");
var ContactActions=require("../../actions/ContactAction");
var Input=require("./Input.react");
var InputContainer = React.createClass({
    getInitialState:function(){
        
        return {
            formFields:ContactStore.getField(this.props.id)
        }
        
    },
    componentDidMount:function(){
        ContactStore.addChangeListener(this.change);
        ContactActions.createForm();
    },
    change:function(){
        this.setState({formFields:ContactStore.getField()});
    },
  render: function() {
     
    return (
            <div>
                <Input {...this.state}/>
            </div>
        );
  }
});
module.exports=InputContainer;