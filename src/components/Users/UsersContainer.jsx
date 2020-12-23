
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';

import Preloader from '../common/Preloader/Preloader';

import {follow, unfollow, setCurrentPage, getUsersThunkCreator, toggleFollowingInProgress} from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




/*
const MyPostsContainer = (props) => {


      let addPost = () => {
          props.dispatch({type: 'ADD-POST'});
         
      }
      let onPostChange = (text)=> {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
      }


  return   (  
   <MyPosts addPost = {addPost} 
            onPostChange = {onPostChange}
            posts = {props.posts}
            newPostText = {props.newPostText} />
  );
}
*/
class UsersAPI extends React.Component {


    componentDidMount () {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
      /*this.props.toggleIsFetching(true);

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);     
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });*/
    }
  
    onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);

     /* this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);

      usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => { 
        this.props.toggleIsFetching(false);         
        this.props.setUsers(data.items)
      });*/
    }
  
      render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
           <Users 
                    totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    users = {this.props.users}
                    followingInProgress = {this.props.followingInProgress}

                />

        </>
      }
  }


let f1 = (state) => {
    return {
            users: state.allUsers.users,
            pageSize: state.allUsers.pageSize,
            totalUsersCount: state.allUsers.totalUsersCount,
            currentPage: state.allUsers.currentPage,
            isFetching: state.allUsers.isFetching,
            followingInProgress: state.allUsers.followingInProgress
    }
}
/*let f2 = (dispatch) => {
    return {
        follow: (userId)=> {
            dispatch({type: 'FOLLOW', userId: userId});
        },
        unfollow: (userId)=> {
            dispatch({type: 'UNFOLLOW', userId: userId});
        },
        setUsers: (users)=> {
            dispatch({type: 'SET_USERS', users: users});
        },
        setCurrentPage: (currentPage)=> {
            dispatch({type: 'SET_CURRENT_PAGE', currentPage: currentPage})
        },
        setTotalUsersCount: (totalUsersCount)=> {
            dispatch({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount: totalUsersCount})
        },
        toggleIsFetching: (isFetching) => {
            dispatch({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching})
        },
        
        toggleFollowingInProgress: (isFetching, userId) => {
          dispatch({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching: isFetching, userId:userId})
        },
        getUsersThunkCreator: getUsersThunkCreator 

    }
}*/

let withRedirect = withAuthRedirect(UsersAPI)
const UsersContainer = connect(f1,  {follow, unfollow, setCurrentPage, getUsers: getUsersThunkCreator, toggleFollowingInProgress})(withRedirect);


export default UsersContainer;