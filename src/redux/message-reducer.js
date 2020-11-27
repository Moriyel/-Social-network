let initialState = {
  dialogs: [
    { id : 1, name: "Dimych"},
    { id : 2, name: "Saha"},
    { id : 3, name: "Milka"},
    { id : 4, name: "lera"}
  ],
  messages: [
      { id : 1, message: "Hi"},
      { id : 2, message: "How are you"},
      { id : 3, message: "Hi"},
      { id : 4, message: "Ok"}   
    ],
    newMessageBody: ""
  
};


const messageReducer = (state = initialState, action) => {
      if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
          state.newMessageBody = action.body;
      } else if (action.type === 'SEND-MESSAGE'){
            let body = state.newMessageBody;
          state.newMessageBody = "";
          state.messages.push({id : 4, message: body});
      }
      return state;
      
}
export default messageReducer;