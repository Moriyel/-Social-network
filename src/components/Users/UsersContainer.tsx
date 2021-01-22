import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {follow, unfollow, setCurrentPage, getUsersThunkCreator, toggleFollowingInProgress} from '../../redux/users-reducer';
import { compose } from 'redux';
import { getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import { UsersType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';


type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UsersType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number)=> void
  unfollow: (userId: number)=> void
  follow: (userId: number)=> void
  toggleFollowingInProgress: (isFetching: boolean, userId: number)=> void
  setCurrentPage: (currentPage: number)=> void

}

type OwnPropsType = {
  pageTitle: string

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {


    componentDidMount () {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }
  
    onPageChanged = (pageNumber: number) => {
      this.props.getUsers(pageNumber, this.props.pageSize);

    }
  
      render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
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




let f1 = (state: AppStateType): MapStatePropsType => {
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
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(f1,  {follow, unfollow, setCurrentPage, getUsers: getUsersThunkCreator, toggleFollowingInProgress })
)(UsersContainer);