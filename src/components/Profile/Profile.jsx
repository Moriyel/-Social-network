import MyPosts from './MyPosts/MyPosts';
import a from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  
  return   (  
  <div>
      <ProfileInfo />
      <MyPosts posts = {props.posts} addPost = {props.addPost} />
  </div> 
  );
}


export default Profile;