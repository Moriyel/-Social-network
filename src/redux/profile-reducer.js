import { Switch } from "react-router-dom";
import { usersAPI } from "../api/api";
const SET_USER_PROFILE = 'SET_USER_PROFILE';




let initialState = {
  posts: [
    { id : 1, message: "Hi, how are you?", likesCount: 12},
    { id : 2, message: "All write", likesCount: 10},
      ],
      
    newPostText: "figase",
    profile: null
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
    case 'SET_USER_PROFILE': {
      return {...state, profile: action.profile}

    }
  default:
  return state;
  }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
      .then(response => {  
          dispatch(setUserProfile(response.data));
      });
}


export default postReducer;