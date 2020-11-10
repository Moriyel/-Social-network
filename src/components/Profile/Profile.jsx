import MyPosts from './MyPosts/MyPosts';
import a from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = () => {
  return   (  
  <div>
      <ProfileInfo />
      <MyPosts />
  </div> 
  );
}


export default Profile;