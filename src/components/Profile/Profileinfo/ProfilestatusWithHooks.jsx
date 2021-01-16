import React, { useEffect, useState } from 'react';
import a from './Profileinfo.module.css';



const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditmode] = useState(false); //хуки для стейта
    let [status, setStatus] = useState(props.status);//хуки лучше дробить на несколько хуков
    useEffect(()=> {
      setStatus(props.status)
    }, [props.status]) 

    const activateEditMode = () =>{
      setEditmode(true);
    }

    const deactivateEditMode = ()=>{
      setEditmode(false);
      props.updateStatus(status);
    }

    const     onStatusChange = (e) => {
      setStatus(e.currentTarget.value);    
    }


      return (
        <div>
              {!editMode &&
                  <div>
                      <b>Status:</b><span onDoubleClick = {activateEditMode} >{props.status || "---" }</span>
                  </div>
              }
              {editMode && 
                  <div>
                      <input onChange = {onStatusChange} onBlur = {deactivateEditMode}  autoFocus value={status}  />
                  </div>
              }
        </div> 
      )
}

export default ProfileStatusWithHooks;