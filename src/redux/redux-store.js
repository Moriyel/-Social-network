import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import postReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
  allPosts: postReducer,
  allMessages: messageReducer,
  allUsers: usersReducer,
  auth: authReducer
  
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;