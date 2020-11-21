import messageReducer from "./message-reducer";
import postReducer from "./profile-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  allPosts: postReducer,
  allMessages: messageReducer
  
});

let store = createStore(reducers);
export default store;