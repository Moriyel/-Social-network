import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';

import Settings from './components/Setting/Settings';
import Friends from './components/Friends/Friends';



function App(props) {
  
  return (
    
        <div className = 'app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path = '/dialogs' render = { () => <Dialogs dialogs = {props.appState.allMessages.dialogs} 
                messages = {props.appState.allMessages.messages}
                newMessageBody = {props.appState.allMessages.newMessageBody}
                dispatch = {props.dispatch}
                 />} />


                <Route path = '/profile' render = { () => <Profile posts = {props.appState.allPosts.posts} 
                dispatch = {props.dispatch}
                
                newPostText = {props.appState.allPosts.newPostText}
                 />} />


                <Route path = '/news' component = {News} />
                <Route path = '/music' component = {Music} />
                <Route path = '/settings' component = {Settings} />
  <Route path = '/friends' render = {() => <Friends dialogs = {props.appState.dialogs}  
                messages = {props.appState.messages} />} />
            </div> 
     
        </div>

  );
}





export default App;
