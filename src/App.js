import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';



class App extends Component {
      componentDidMount () {
      this.props.initializeApp();
 
      }
  
    render() {
      if (!this.props.initialized) {
          return <Preloader />
      }
      return (
        
        <div className = 'app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Switch>
            <Route exact path = '/' render = { () => <Redirect to={'/profile'} />} />
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
                </Switch>
            </div> 
     
        </div>

  );
}
}



const mapStateToProps = (state) => ({
        initialized: state.app.initialized
})

export default compose(
                withRouter,
                connect(mapStateToProps, {initializeApp}))(App);
