import {usersAPI} from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};




const usersReducer = (state = initialState, action)=>{
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


export const followSucces = (userId)=> ({type: 'FOLLOW', userId: userId});

export const unfollowSucces = (userId)=> ({type: 'UNFOLLOW', userId: userId});



export const setCurrentPage = (currentPage)=>({type: 'SET_CURRENT_PAGE', currentPage: currentPage})

export const toggleFollowingInProgress  = (isFetching, userId) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching: isFetching, userId:userId})





export const setUsers = (users) => ({type: 'SET_USERS', users})
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching})
export const setTotalUsersCount = (totalUsersCount)=> ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount: totalUsersCount})


export const getUsersThunkCreator = (page, pageSize) =>{ 
    return async (dispatch) => {
      
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
            dispatch(toggleIsFetching(false));     
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const follow = (userId) =>{ 
  return async (dispatch) => {
    
      dispatch(toggleFollowingInProgress(true, userId));
      let response = await usersAPI.follow(userId);
          
              if (response.data.resultCode === 0) {
                  dispatch(followSucces(userId));
              }
              dispatch(toggleFollowingInProgress(false, userId));    
  }
}

export const unfollow = (userId) =>{ 
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