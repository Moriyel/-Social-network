import Preloader from '../../common/Preloader/Preloader';
import a from './Profileinfo.module.css';
import ProfileStatus from './Profilestatus'; 

const ProfileInfo = (props) => {
  if (!props.profile) {//если нет профайла то отрисуй без него перезагрузку
    return <Preloader />
  }
  return   (  
  <div>
      {/*<div>
          <img src = 'https://nashaplaneta.net/articles/images/xindonesia-alishha-2.jpg.pagespeed.ic.SvTFiGyI68.jpg' />
      </div>*/}
      <div className = {a.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <ProfileStatus status = {"Hello"} />
      </div>
</div> 
  );
}


export default ProfileInfo;