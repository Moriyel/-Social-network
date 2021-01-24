import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import postReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";


let rootReducer = combineReducers({
  allPosts: postReducer,
  allMessages: messageReducer,
  allUsers: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
  
});

type RootReducerType = typeof rootReducer 
export type AppStateType = ReturnType<RootReducerType>

type PropetiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends  {[key: string]: (...args: any)=>any}> = ReturnType<PropetiesTypes<T>>


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;
export default store;