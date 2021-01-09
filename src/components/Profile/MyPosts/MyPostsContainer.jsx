
import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';



/*
const MyPostsContainer = (props) => {


      let addPost = () => {
          props.dispatch({type: 'ADD-POST'});
         
      }
      let onPostChange = (text)=> {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
      }


  return   (  
   <MyPosts addPost = {addPost} 
            onPostChange = {onPostChange}
            posts = {props.posts}
            newPostText = {props.newPostText} />
  );
}
*/
let f1 = (state) => {
    return {
            posts: state.allPosts.posts,
            newPostText: state.allPosts.newPostText
    }
}
let f2 = (dispatch) => {
    return {
        addPost: (newPostText)=> {
            dispatch({type: 'ADD-POST', newPostText});
        }
    }
}
const MyPostsContainer = connect(f1, f2)(MyPosts);


export default MyPostsContainer;