
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, follow, unfollow, getUsersThunkCreator} from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUser, getUsersFilter } from '../../redux/users-selectors';
import { UsersType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UserSearchForm} from './UsersSearchForm';



type PropsType = {
    //totalUsersCount: number
    //pageSize: number
    //currentPage: number
    //onPageChanged: (pageNumber: number) => void
    //onFilterChanged: (filter: FilterType) => void
    //users: Array<UsersType>
    //followingInProgress: Array<number>
    //unfollow: (userId: number)=> void
    //follow: (userId: number)=> void

}

export let Users: React.FC<PropsType>  = (props) => {
    const users = useSelector(getUser)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }, [])
    
    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
      }
    const follow = (userId: number)=> {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number)=> {
        dispatch(unfollow(userId))
    }
    

 
    return <div>
        <UserSearchForm onFilterChanged = {onFilterChanged} />

        <Paginator currentPage = {currentPage}
                    onPageChanged ={onPageChanged}
                    totalItemsCount = {totalUsersCount} 
                    pageSize = {pageSize}/>
        <div>
            { users.map(u => <User user ={u} 
                   followingInProgress = {followingInProgress}
                   key={u.id}
                   unfollow={unfollow}
                   follow={follow}
            />)
            }
        </div>
    </div>
}
