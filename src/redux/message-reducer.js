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
        let stateCopy = {...state};
          stateCopy.newMessageBody = action.body;
          return stateCopy;
      } else if (action.type === 'SEND-MESSAGE'){
            let stateCopy = {...state};
            
            let body = stateCopy.newMessageBody;    
          stateCopy.newMessageBody = "";
          //stateCopy.messages = [...state.messages];
          stateCopy.messages.push({id : 4, message: body});
          return stateCopy;
      }
      return state;

}
export default messageReducer;