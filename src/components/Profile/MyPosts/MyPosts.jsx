import a from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
        <Post message = "Hi, how are you?" like = ' 10' />
        <Post message = "All write!" like = ' 12' />

      </div>
  </div>

  );
}


export default MyPosts;