
type DialogType = {
  id : number
  name: string
}
type MessageType = {
  id: number
  message: string
}

export type InitialStateType = typeof initialState;



let initialState = {
  dialogs: [
    { id : 1, name: "Dimych"},
    { id : 2, name: "Saha"},
    { id : 3, name: "Milka"},
    { id : 4, name: "lera"}
  ] as Array<DialogType>,
  messages: [
      { id : 1, message: "Hi"},
      { id : 2, message: "How are you"},
      { id : 3, message: "Hi"},
      { id : 4, message: "Ok"}   
    ] as Array<MessageType>
  
};

//перемещаю в гитигнор папку тест 2


const messageReducer = (state = initialState, action: any): InitialStateType => {
 if (action.type === 'SEND-MESSAGE'){
            let stateCopy = {...state};
            
            let body = action.newMessageBody;    
          
          stateCopy.messages = [...state.messages];
          stateCopy.messages.push({id : 7, message: body});
          return stateCopy;
      }
      return state;

}

export default messageReducer;