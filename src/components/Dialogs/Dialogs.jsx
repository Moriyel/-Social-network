
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Messaje';
import {Field, reduxForm} from 'redux-form';


const Dialogs = (props) => {
  const addNewMessage = (values) => {
    props.onSendMessageClick(values.newMessageBody);
  }
        
        let dialogsElements = props.dialogs
        .map(d => <DialogItem name ={d.name} key = {d.id} id ={d.id} />)

      let messagesElements = props.messages
        .map(m => <Message message = {m.message} key={m.id} />)
      let newMessageBody = props.newMessageBody;


      if (!props.isAuth) return <Redirect to = {'/login'} />;

  return     (
    <div className = {s.dialogs}>

      <div className= {s.dialogsItems}>
          
          {dialogsElements}
      
      </div>

      <div className = {s.messages}>
          <div>{messagesElements}</div>

     
      </div>
      <AddMessageFormRedux onSubmit = {addNewMessage} />
    </div>
  );
}

const AddMessageForm = (props) => {
  return <div>
    <form onSubmit = {props.handleSubmit}>
        <div><Field component = {"textarea"} name={"newMessageBody"}         
          placeholder = {'Enter your message'} /></div>
        <div><button>Send</button></div>
    </form>
  </div> 
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;