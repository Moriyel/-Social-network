
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';



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
let f1 = (state) => {
    return {
            users: state.allUsers.users,
            pageSize: state.allUsers.pageSize,
            totalUsersCount: state.allUsers.totalUsersCount,
            currentPage: state.allUsers.currentPage
    }
}
let f2 = (dispatch) => {
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
        }
    }
}
const UsersContainer = connect(f1, f2)(Users);


export default UsersContainer;