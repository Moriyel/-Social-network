import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {follow, unfollow, setCurrentPage, getUsersThunkCreator, toggleFollowingInProgress} from '../../redux/users-reducer';
import { compose } from 'redux';
import { getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';



class UsersAPI extends React.Component {


    componentDidMount () {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }
  
    onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);

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
          users: getUser(state),
          pageSize: getPageSize(state),
          totalUsersCount: getTotalUsersCount(state),
          currentPage: getCurrentPage(state),
          isFetching: getIsFetching(state),
          followingInProgress: getFollowingInProgress(state)
  }
}




export default compose (
  connect(f1,  {follow, unfollow, setCurrentPage, getUsers: getUsersThunkCreator, toggleFollowingInProgress})
  
)(UsersAPI);