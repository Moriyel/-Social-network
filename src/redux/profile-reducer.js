import { Switch } from "react-router-dom";

let initialState = {
  posts: [
    { id : 1, message: "Hi, how are you?", likesCount: 12},
    { id : 2, message: "All write", likesCount: 10},
      ],
      
    newPostText: "figase",
};




const postReducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'ADD-POST':
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    state.posts.push(newPost); 
    state.newPostText = "";
    return state;
    case 'UPDATE-NEW-POST-TEXT':
    state.newPostText = action.newText;
    return state;
  default:
  return state;
  }
}

export default postReducer;