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
    case 'ADD-POST': {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];
    stateCopy.posts.push(newPost); 
    stateCopy.newPostText = "";
    return stateCopy;
  }
    case 'UPDATE-NEW-POST-TEXT': {
      let stateCopy = {...state};
    stateCopy.newPostText = action.newText;
    return stateCopy;
    }
  default:
  return state;
  }
}

export default postReducer;