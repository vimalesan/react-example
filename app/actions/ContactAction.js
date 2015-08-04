var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContactConstants = require('../constants/ContactConstants');

var ContactActions = {
  createForm: function() {
     
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_CREATE
    });
  },
  onChange:function(id,value){
    
     AppDispatcher.dispatch({
      actionType: ContactConstants.SET_FIELD,
      id:id,
      value:value
    });
  }
}
module.exports=ContactActions;