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
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}



/*export const getUsers2 = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
}*/