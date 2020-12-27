import { Switch } from "react-router-dom";
import { profileAPI, usersAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';




let initialState = {
  posts: [
    { id : 1, message: "Hi, how are you?", likesCount: 12},
    { id : 2, message: "All write", likesCount: 10},
      ],
      
    newPostText: "figase",
    profile: null,
    status: ''
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
    case SET_STATUS: {
      return {...state, status: action.status}

    }
    case 'SET_USER_PROFILE': {
      return {...state, profile: action.profile}

    }
  default:
  return state;
  }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
      .then(response => {  
          dispatch(setUserProfile(response.data));
      });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(response => {  
          dispatch(setStatus(response.data));
      });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) { 
          dispatch(setStatus(status));
        } 
      });
}


export default postReducer;