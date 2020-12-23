import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



function App(props) {
  
  return (
    
        <div className = 'app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render = { () => <DialogsContainer 
                /*dialogs = {props.appState.allMessages.dialogs} 
                messages = {props.appState.allMessages.messages}
                newMessageBody = {props.appState.allMessages.newMessageBody}
                dispatch = {props.dispatch}*/
                 />} />
                 <Route path = '/login' render = { () => <Login />} />


                <Route path = '/profile/:userId?' render = { () => <ProfileContainer /*posts = {props.store.allPosts.posts} 
                dispatch = {props.dispatch}
                
                newPostText = {props.appState.allPosts.newPostText}*/
                 />} />


                <Route path = '/news' component = {News} />
                <Route path = '/music' component = {Music} />
                <Route path = '/settings' component = {Settings} />
  <Route path = '/friends' render = {() => <Friends 
                /*dialogs = {props.appState.dialogs}  
                messages = {props.appState.messages}*/ />} />
                <Route path = '/users' 
                render = { () => <UsersContainer /> } />
            </div> 
     
        </div>

  );
}





export default App;
