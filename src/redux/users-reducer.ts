import { AppStateType } from './redux-store';
import {usersAPI} from '../api/api';
import { UsersType } from '../types/types';
import { updateObjectInArray } from '../utils/object-helpers';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'




let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> //array of users id
};

type initialStateAction = typeof initialState


const usersReducer = (state = initialState, action: ActionTypes):initialStateAction =>{
  switch (action.type) {
    case FOLLOW: 
                return {
                    ...state, 
                    users: updateObjectInArray(state.users, action.userId, "id",  {followed: true})
                }; 
  
    case UNFOLLOW: 
          return  {
            ...state, 
            users: updateObjectInArray(state.users, action.userId, "id",  {followed: false})
          };
          case SET_USERS: {
            return { ...state, users: action.users}
          }
          case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
          }
          case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount}
          }
          case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
          }
          case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
          }

          default:
            return state;
  }
}


type ActionTypes = FollowSuccesActionType | UnFollowSuccesActionType |SetUsersActionType | SetCurrentPageActionType |  SetTotalUsersCountActionType | ToggleIsFetchingActionType |ToggleFollowingInProgressActionType


type FollowSuccesActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSucces = (userId: number): FollowSuccesActionType => ({type: FOLLOW, userId: userId});

type UnFollowSuccesActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSucces = (userId: number):UnFollowSuccesActionType => ({type: UNFOLLOW, userId: userId});


type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>({type: SET_CURRENT_PAGE, currentPage})

type ToggleFollowingInProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingInProgress  = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


type SetUsersActionType = {
  type: typeof SET_USERS  
  users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>):SetUsersActionType => ({type: SET_USERS, users})

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING  
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT  
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})


type GetStateType = () => AppStateType
type DispatcType = Dispatch<ActionTypes>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsersThunkCreator = (page: number, pageSize: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> =>{ 
    return async (dispatch, getState) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
            dispatch(toggleIsFetching(false));     
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const follow = (userId: number): ThunkType =>{ 
  return async (dispatch) => {
    
      dispatch(toggleFollowingInProgress(true, userId));
      let response = await usersAPI.follow(userId);
          
              if (response.data.resultCode === 0) {
                  dispatch(followSucces(userId));
              }
              dispatch(toggleFollowingInProgress(false, userId));    
  }
}

export const unfollow = (userId: number): ThunkType =>{ 
  return async (dispatch) => {    
      dispatch(toggleFollowingInProgress(true, userId));
      let response = await usersAPI.unfollow(userId);         
              if (response.data.resultCode === 0) {
                  dispatch(unfollowSucces(userId));
              }
              dispatch(toggleFollowingInProgress(false, userId));    
  }
}
export default usersReducer;