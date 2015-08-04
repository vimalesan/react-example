var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ContactConstants = require('../constants/ContactConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var CHANGE_VALUE_EVENT = 'changeValue';

var _contactFields = [];


var ContactStore = assign({}, EventEmitter.prototype, {

  getFormFields:function(){
      return _contactFields;
  },
  getField:function(id){
      return _contactFields.map(function(field){
        if(field.id==id)
        return field;
      });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});
function setContactFields(){
    var ob={};
    for(var i=0;i<1000;i++){
          var id="t"+i;
            ob[id]={
                    type:"text",
                    id:"t"+i,
                    value:"test"+i
                    };
            
        }
        _contactFields=ob;
}
function setField(id,value){
  _contactFields[id].value=value;
}
// Register callback to handle all updates
AppDispatcher.register(function(action) {
 
  switch(action.actionType) {
    case ContactConstants.CONTACT_CREATE:
        
        
      setContactFields();  
      ContactStore.emitChange();
      break;
        case ContactConstants.SET_FIELD:
          console.log(action)
          setField(action.id,action.value);
          ContactStore.emitChange();
      break;
  } 

});

module.exports = ContactStore;
