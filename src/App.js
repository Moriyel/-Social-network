import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UserPage} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Header } from './components/Header/Header';
import ChatPage from './pages/Chat/ChatPage';

const { SubMenu } = Menu;
const {Content, Footer, Sider } = Layout;



class App extends Component {
      componentDidMount () {
      this.props.initializeApp();
 
      }
  
    render() {
      if (!this.props.initialized) {
          return <Preloader />
      }
      return (
        <Layout>
          <Header />

    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="1"> <Link to = '/profile'>Profile</Link></Menu.Item>
              <Menu.Item key="2"><Link to = '/dialogs'>Mesages</Link></Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
              <Menu.Item key="5"><Link to= '/users'>Users</Link></Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9"><Link to= '/chat'>Chat</Link></Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
            <Route exact path = '/' render = { () => <Redirect to={'/profile'} />} />
                <Route path = '/dialogs' render = { () => <DialogsContainer  />} />
                 <Route path = '/login' render = { () => <Login />} />


                <Route path = '/profile/:userId?' render = { () => <ProfileContainer />} />


                <Route path = '/news' component = {News} />
                <Route path = '/music' component = {Music} />
                <Route path = '/settings' component = {Settings} />
                <Route path = '/friends' render = {() => <Friends />} />
                <Route path = '/users' 
                render = { () => <UserPage pageTitle={"Title"}/> } />
                <Route path = '/chat' render = {() => <ChatPage />} />
                </Switch>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}> footer 2020 </Footer>
  </Layout>








        
        /*<div className = 'app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Switch>
            <Route exact path = '/' render = { () => <Redirect to={'/profile'} />} />
                <Route path = '/dialogs' render = { () => <DialogsContainer  />} />
                 <Route path = '/login' render = { () => <Login />} />


                <Route path = '/profile/:userId?' render = { () => <ProfileContainer />} />


                <Route path = '/news' component = {News} />
                <Route path = '/music' component = {Music} />
                <Route path = '/settings' component = {Settings} />
  <Route path = '/friends' render = {() => <Friends />} />
                <Route path = '/users' 
                render = { () => <UserPage pageTitle={"Title"}/> } />
                </Switch>
            </div> 
     
        </div>*/

  );
}
}



const mapStateToProps = (state) => ({
        initialized: state.app.initialized
})

export default compose(
                withRouter,
                connect(mapStateToProps, {initializeApp}))(App);
