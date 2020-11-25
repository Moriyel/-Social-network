
import React from 'react';
import MyPosts from './MyPosts';




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


export default MyPostsContainer;