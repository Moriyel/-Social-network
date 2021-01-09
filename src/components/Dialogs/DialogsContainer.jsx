
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
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
            onSendMessageClick: (newMessageBody) => {
              dispatch({type: 'SEND-MESSAGE', newMessageBody});
            }
          }

}




export default compose(
  connect(f1, f2),
  withAuthRedirect
)(Dialogs);