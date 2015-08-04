var React = require('react');

var ContactStore=require("../../stores/ContactStore");
var ContactActions=require("../../actions/ContactAction");
var Form=require("./Form.react");
var ContactForm = React.createClass({
    getInitialState:function(){
        
        return {
            formFields:ContactStore.getFormFields()
        }
        
    },
    componentDidMount:function(){
        ContactStore.addChangeListener(this.change);
        ContactActions.createForm();
    },
    change:function(){
        this.setState({formFields:ContactStore.getFormFields()});
    },
  render: function() {
     
    return (
            <div>
                <Form {...this.state} actions={ContactActions} />
            </div>
        );
  }
});
module.exports=ContactForm;