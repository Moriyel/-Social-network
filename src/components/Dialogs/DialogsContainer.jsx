
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';




let f1 = (state) => {
     return  {
              dialogs: state.allMessages.dialogs,
              messages: state.allMessages.messages,
              newMessageBody: state.allMessages.newMessageBody            
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);



const DialogsContainer = connect(f1, f2)(AuthRedirectComponent);

export default DialogsContainer;