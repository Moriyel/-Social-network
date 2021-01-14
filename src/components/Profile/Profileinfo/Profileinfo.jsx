import Preloader from '../../common/Preloader/Preloader';
import a from './Profileinfo.module.css';

import ProfileStatusWithHooks from './ProfilestatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {//если нет профайла то отрисуй без него перезагрузку
    return <Preloader />
  }
  
  return   (  
  <div>
      <div className = {a.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <ProfileStatusWithHooks status = {props.status} updateStatus ={props.updateStatus} />
      </div>
</div> 
  );
}


export default ProfileInfo;