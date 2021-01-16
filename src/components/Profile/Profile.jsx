import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import a from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  
  return   (  
  <div>
      <ProfileInfo profile={ props.profile } status = {props.status} updateStatus = {props.updateStatus} isOwner = {props.isOwner} savePhoto = {props.savePhoto} saveProfile = {props.saveProfile} />
      <MyPostsContainer /*posts = {props.posts}
                        newPostText = {props.newPostText}
                        dispatch = {props.dispatch}*/ />
  </div> 
  );
}


export default Profile;