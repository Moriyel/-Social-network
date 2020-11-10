import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return  <div className = {s.dialog + " " + s.active}>
              <NavLink to ={path}>{props.name}</NavLink>
          </div>
}

const Message = (props) => {
return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return     (
    <div className = {s.dialogs}>

      <div className= {s.dialogsItems}>
          <DialogItem name = "Dimych" id = '1' />
          <DialogItem name = "Sasha" id = '2' />
          <DialogItem name = "Liska" id = '3' />
          <DialogItem name = "Milka" id = '4' />          
      </div>

      <div className = {s.messages}>
          <Message message = "Hi"/>
          <Message message = "How are you"/>
          <Message message = "Ok"/>
          <Message message = "Hi"/>         
      </div>

    </div>
  );
}


export default Dialogs;