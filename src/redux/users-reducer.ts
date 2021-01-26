import { AppStateType, InferActionsTypes } from './redux-store';
import {usersAPI} from '../api/api';
import { UsersType } from '../types/types';
import { updateObjectInArray } from '../utils/object-helpers';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';




let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array of users id
  filter: {
    term: '',
    friend: null as null | boolean
  }
};

type initialStateAction = typeof initialState


const usersReducer = (state = initialState, action: ActionTypes):initialStateAction =>{
  switch (action.type) {
    case 'FOLLOW': 
                return {
                    ...state, 
                    users: updateObjectInArray(state.users, action.userId, "id",  {followed: true})
                }; 
  
    case 'UNFOLLOW': 
          return  {
            ...state, 
            users: updateObjectInArray(state.users, action.userId, "id",  {followed: false})
          };
          case 'SET_USERS': {
            return { ...state, users: action.users}
          }
          case 'SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage}
          }
          case 'SET_FILTER': {
            return { ...state, filter: action.payload}
          }
          case 'SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount}
          }
          case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching}
          }
          case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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


type ActionTypes = InferActionsTypes<typeof actions>

export const actions ={

 followSucces: (userId: number) => ({type: 'FOLLOW', userId: userId} as const),
 unfollowSucces: (userId: number) => ({type: 'UNFOLLOW', userId: userId} as const),
 setCurrentPage: (currentPage: number) =>({type: 'SET_CURRENT_PAGE', currentPage} as const),
 setFilter: (filter: FilterType) =>({type: 'SET_FILTER', payload: filter} as const),
 toggleFollowingInProgress : (isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
 setUsers: (users: Array<UsersType>) => ({type: 'SET_USERS', users} as const),
 toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
 setTotalUsersCount: (totalUsersCount: number)=> ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const)
}

type GetStateType = () => AppStateType
type DispatcType = Dispatch<ActionTypes>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsersThunkCreator = (page: number, pageSize: number, filter: FilterType): ThunkType =>{ 
    return async (dispatch, getState) => {

        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));

        let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
            dispatch(actions.toggleIsFetching(false));     
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

export const follow = (userId: number): ThunkType =>{ 
  return async (dispatch) => {
    
      dispatch(actions.toggleFollowingInProgress(true, userId));
      let response = await usersAPI.follow(userId);
          
              if (response.data.resultCode === 0) {
                  dispatch(actions.followSucces(userId));
              }
              dispatch(actions.toggleFollowingInProgress(false, userId));    
  }
}

export const unfollow = (userId: number): ThunkType =>{ 
  return async (dispatch) => {    
      dispatch(actions.toggleFollowingInProgress(true, userId));
      let response = await usersAPI.unfollow(userId);         
              if (response.data.resultCode === 0) {
                  dispatch(actions.unfollowSucces(userId));
              }
              dispatch(actions.toggleFollowingInProgress(false, userId));    
  }
}

export type FilterType = typeof initialState.filter;
export default usersReducer;