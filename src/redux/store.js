import messageReducer from "./message-reducer";
import postReducer from "./profile-reducer";

let store = {
        _state: {
            posts: [
            { id : 1, message: "Hi, how are you?", likesCount: 12},
            { id : 2, message: "All write", likesCount: 10},
              ],
              
            newPostText: "figase",
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
            },
            
            getState() {
              return this._state;
            },
        _callSubscriber() {
              console.log("fff");
            },
        subscribe(observer) {
              this._callSubscriber = observer;
            },
            dispatch(action) {
              this._state = postReducer(this._state, action);
              this._state = messageReducer(this._state, action);
              this._callSubscriber(this._state);

            }

}








export default store;
window.store = store;
