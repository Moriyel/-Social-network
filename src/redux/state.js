import { rerenderEntireTree } from "../render";

let state = {
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
              ]
}
export let updateNewPostText = (newText) => {
 
  state.newPostText = newText;
  rerenderEntireTree(state);
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.newPostText,
    likesCount: 0
  };
  state.posts.push(newPost);
  state.newPostText = "";
  rerenderEntireTree(state);
}

export default state;