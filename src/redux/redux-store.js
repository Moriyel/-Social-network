import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import postReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";


let reducers = combineReducers({
  allPosts: postReducer,
  allMessages: messageReducer,
  allUsers: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
  
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;