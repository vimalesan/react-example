var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContactConstants = require('../constants/ContactConstants');

var ContactActions = {
  createForm: function() {
     
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_CREATE
    });
  },
  onChange:function(field){
    
     AppDispatcher.dispatch({
      actionType: ContactConstants.SET_FIELD,
      field:field,
      value:event.target.value
    });
  }
}
module.exports=ContactActions;