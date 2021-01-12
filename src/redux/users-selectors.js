import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.allUsers.users;
}
export const getUser = createSelector( getUsersSelector, (users) => {
  return users.filter(u => true);
})

export const getPageSize = (state) => {
  return state.allUsers.pageSize;
}
export const getTotalUsersCount = (state) => {
  return state.allUsers.totalUsersCount;
}
export const getCurrentPage = (state) => {
  return state.allUsers.currentPage;
}
export const getIsFetching = (state) => {
  return state.allUsers.isFetching;
}
export const getFollowingInProgress = (state) => {
  return state.allUsers.followingInProgress;
}



