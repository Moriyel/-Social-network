import { AppStateType } from './redux-store';
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
    return state.allUsers.users;
}
export const getUser = createSelector( getUsersSelector, (users) => {
  return users.filter(u => true);
})

export const getPageSize = (state: AppStateType) => {
  return state.allUsers.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.allUsers.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
  return state.allUsers.currentPage;
}
export const getIsFetching = (state: AppStateType) => {
  return state.allUsers.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
  return state.allUsers.followingInProgress;
}
export const getUsersFilter = (state: AppStateType) => {
  return state.allUsers.filter;
}



