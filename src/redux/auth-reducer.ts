import { ResulCodeForCaptca } from './../api/api';
import { stopSubmit } from "redux-form";
import { authAPI, ResulCodeEnum, securityAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';







let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
};


export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS: 
                return {
                    ...state, 
                    ...action.payload
                }; 
  
 
          default:
            return state;
  }
}



type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType=> ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => async(dispatch: any) => {

  let meData = await authAPI.me();
    if (meData.resultCode === ResulCodeEnum.Succes) {
    let {id, login, email } = meData.data;
    dispatch(setAuthUserData(id, email, login, true ));
  } 
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async(dispatch: any) =>{
  let loginData = await authAPI.login(email, password, rememberMe, captcha )
   
    if (loginData.resultCode === ResulCodeEnum.Succes) { 
      dispatch(getAuthUserData());
  } else {
      if (loginData.resultCode === ResulCodeForCaptca.CaptchaIsRequired) {
        dispatch(getCaptcahUrl());
      }
      let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
      dispatch(stopSubmit('login', {_error: message}));
  } 
}

export const logout = () => async(dispatch: any) =>{
    let response = await authAPI.logout()
   
    if (response.data.resultCode === 0) {   
      dispatch(setAuthUserData(null, null, null, false));
  } 
}

export const getCaptcahUrl = () => async(dispatch: any) =>{
  const response = await securityAPI.getCaptchaUrl()
   const captchaUrl = response.data.url;
    
      dispatch(getCaptchaUrlSuccess(captchaUrl));
  } 

export default authReducer;