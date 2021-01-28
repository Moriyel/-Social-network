import { NavLink, Link } from 'react-router-dom';
import s from './Header.module.css';
import { Avatar, Row, Col, Button } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectCurrentUserLogin } from '../../redux/auth-selectors';
import { logout } from '../../redux/auth-reducer';


export const Header = (props) => {

const isAuth = useSelector(selectIsAuth)
const login = useSelector(selectCurrentUserLogin)

const dispatch = useDispatch()
const logoutCallback = () =>{
    dispatch(logout())
}


  const {Header} = Layout;

  return <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={18}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to= '/users'>Developers</Link></Menu.Item>
            </Menu>
        </Col>

        
            
            {isAuth 
                ?<> <Col span={1}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Col>
                <Col span={5}>
                  {login} :  <Button onClick = {logoutCallback}>Log out</Button>
                </Col>
                </>
                : <Col span={6}>
                <Button>
                    <Link to = {'/login'}>Login</Link>
                    </Button> 
                </Col>}
      </Row>      
  </Header>
  
  
  
  
  
  
  /*<header className = {s.header}>
  <img src = 'https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg' />
  <div className ={s.loginBlock}>
      {props.isAuth ? 
      <div>{props.login} - <button onClick = {props.logout}>Logout</button></div>
      : <NavLink to = {'/login'}>Login</NavLink> }
      
  </div>
</header>*/
}


 