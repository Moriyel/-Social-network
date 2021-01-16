import { reduxForm } from 'redux-form';
import a from './Profileinfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';


const ProfileDataForm = (props) => {
  return <form onSubmit = {props.handleSubmit}>
        <div><button>save</button></div>
        {props.error && <div className={style.formSummaryError}>
              {props.error}
              </div>}
        <div>
            <b>Full name</b> : {createField('Full Name', 'fullName', [], Input)}
        </div>
   <div>
      <b>Looking for a job</b> : 
      {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
  </div>
  
  <div>
      <b>My professional skills</b>: 
      {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
  </div>
<div>
    <b>About me</b> : {props.profile.aboutMe}
    {createField('About me', 'aboutMe', [], Textarea)}
</div>
<div>
    <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
    return <div key={key} className ={a.contact}><b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b></div>
    })}
  </div>
</form>

}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;