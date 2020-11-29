import messageReducer from "./message-reducer";
import postReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  allPosts: postReducer,
  allMessages: messageReducer,
  allUsers: usersReducer
  
});

let store = createStore(reducers);

export default store;