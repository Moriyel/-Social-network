import a from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
      let postsElements = props.posts.map( p => <Post message = {p.message} like = {p.likesCount} />)
  return   (  
    <div className = {a.postsBlock}>
        <h3>My posts</h3>
      <div>
          <div>
              <textarea></textarea>
          </div>
          <div>
              <button>Add post</button>
          </div>
      </div>
      <div className = {a.posts}>
          {postsElements}

      </div>
  </div>

  );
}


export default MyPosts;