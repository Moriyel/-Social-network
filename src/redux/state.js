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
              if (action.type === 'ADD-POST') {
                  let newPost = {
                    id: 5,
                    message: this._state.newPostText,
                    likesCount: 0
                  };
                  this._state.posts.push(newPost); 
                  this._state.newPostText = "";
                  this._callSubscriber(this._state);
              } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
                  this._state.newPostText = action.newText;
                  this._callSubscriber(this._state);
              } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
                this._state.newMessageBody = action.body;
                this._callSubscriber(this._state);
              } else if (action.type === 'SEND-MESSAGE'){
                let body = this._state.newMessageBody;
                this._state.newMessageBody = "";
                this._state.messages.push({id : 4, message: body});
                this._callSubscriber(this._state);
              }

            }

}








export default store;
window.store = store;
