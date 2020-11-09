import a from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return   (  
    <div>
    My posts
      <div>
       <textarea></textarea><button>Add post</button>
      </div>
      <div className = {a.posts}>
        <Post message = "Hi, how are you?" like = ' 10' />
        <Post message = "All write!" like = ' 12' />

      </div>
  </div>

  );
}


export default MyPosts;