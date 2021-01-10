import * as axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': '2d3eefbc-33ca-4a8a-9b20-e69a0e81dea3'
    }

})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  }

}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  }

}

export const authAPI = {
   me() {
     return instance.get(`auth/me`);
   },
   login(email, password, rememberMe = false) {
     return instance.post(`auth/login`, {email, password, rememberMe});
   },
   logout(){
     return instance.delete(`auth/login`);
   }

}



/*export const getUsers2 = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
}*/