
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';




let f1 = (state) => {
     return  {
              dialogs: state.allMessages.dialogs,
              messages: state.allMessages.messages,
              newMessageBody: state.allMessages.newMessageBody,
              isAuth: state.auth.isAuth
              }
}
let f2 = (dispatch) => {
 
          return {
            onSendMessageClick: () => {
              dispatch({type: 'SEND-MESSAGE'});
            },
            onNewMessageChange: (body) => {
              dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body: body});
            }
          }

}
const DialogsContainer = connect(f1, f2)(Dialogs);

export default DialogsContainer;