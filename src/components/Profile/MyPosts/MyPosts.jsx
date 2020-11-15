import a from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';




const MyPosts = (props) => {


      let postsElements = props.posts.map( p => <Post message = {p.message} like = {p.likesCount} />);

      let newPostElement = React.createRef();
      let addPost = () => {
          let text = newPostElement.current.value;
          props.addPost(text);
      }


  return   (  
    <div className = {a.postsBlock}>
        <h3>My posts</h3>
      <div>
          <div>
              <textarea ref = {newPostElement}></textarea>
          </div>
          <div>
              <button onClick = {addPost}>Add post</button>
          </div>
      </div>
      <div className = {a.posts}>
          {postsElements}

      </div>
  </div>

  );
}


export default MyPosts;