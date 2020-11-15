

import s from './Friends.module.css';


const Friends = (props) => {
  return     <div>
                  <div >
                      <h2 className= {s.h}>Friends</h2>
                  </div>
                  <div >
                    Здесь будут мои френды и аватарки
                      <div className = {s.rowFreinds}>
                        <div className={s.avatar}>
                         
                         
                        </div>
                        <div className={s.avatar}>
                        </div>
                        <div className={s.avatar}>
                        </div>
                      </div>
                  </div>
                  
            </div>
}


export default Friends;