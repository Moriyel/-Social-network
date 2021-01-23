import axios from 'axios';
import { ProfileType } from '../types/types';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': '2d3eefbc-33ca-4a8a-9b20-e69a0e81dea3'
    }

})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number) {
    return profileAPI.getProfile(userId);
  }

}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData,{
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    } )
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile); 
  }

}

export enum ResulCodeEnum {
  Succes = 0,
  Error = 1,
}

export enum ResulCodeForCaptca {
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: {id: number, email: string, login: string}
  resultCode: ResulCodeEnum
  messagess: Array<string>
}

type LoginMeResponseType = {
  data: {userId: number}
  resultCode: ResulCodeEnum | ResulCodeForCaptca
  messages: Array<string>
}

export const authAPI = {
   me() {
     return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
   },
   login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
     return instance.post<LoginMeResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);
   },
   logout(){
     return instance.delete(`auth/login`);
   }

}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }

}



/*export const getUsers2 = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
}*/