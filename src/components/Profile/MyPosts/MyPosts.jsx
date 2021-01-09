import a from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from 'redux-form';



const MyPosts = (props) => {


      let postsElements = props.posts.map( p => <Post message = {p.message} like = {p.likesCount} />);

      let newPostElement = React.createRef();
      let addPost = (values) => {
          props.addPost(values.newPostText);
         
      }

  return   (  
    <div className = {a.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={addPost} />
      <div className = {a.posts}>
          {postsElements}
      </div>
  </div>

  );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = "textarea" name = "newPostText" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;