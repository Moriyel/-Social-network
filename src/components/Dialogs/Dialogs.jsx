
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Messaje';


const Dialogs = (props) => {

        let dialogsElements = props.dialogs
        .map(d => <DialogItem name ={d.name} id ={d.id} />)

      let messagesElements = props.messages
        .map(m => <Message message = {m.message} id={m.id} />)
      let newMessageBody = props.newMessageBody;
      let onSendMessageClick = () => {
        props.onSendMessageClick();
      } 
      let onNewMessageChange = (event) => {
        let body = event.target.value;
          props.onNewMessageChange(body);
      } 

  return     (
    <div className = {s.dialogs}>

      <div className= {s.dialogsItems}>
          
          {dialogsElements}
      
      </div>

      <div className = {s.messages}>
          <div>{messagesElements}</div>
          <div>
              <div><textarea value = {newMessageBody}
                onChange = {onNewMessageChange}
                placeholder = 'Enter your message' /></div>
              <div><button onClick = {onSendMessageClick}>Send</button></div>
          </div>
     
      </div>

    </div>
  );
}


export default Dialogs;