
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Messaje';


const DialogsContainer = (props) => {

      let onSendMessageClick = () => {
        props.dispatch({type: 'SEND-MESSAGE'})
      } 
      let onNewMessageChange = (body) => {
          props.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
      } 

  return     (
    <Dialogs dialogs= {props.dialogs}
             messages = {props.messages}
             newMessageBody = {props.newMessageBody}
             onSendMessageClick = {onSendMessageClick}
             onNewMessageChange = {onNewMessageChange}
     />
  );
}


export default DialogsContainer;