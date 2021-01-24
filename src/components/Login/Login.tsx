import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css'
import { AppStateType } from '../../redux/redux-store';


type LoginFormOwnProps = {
  captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  return (
      <form onSubmit = {props.handleSubmit}>
        {/*Field  можно зарефакторить, сам код написать в FormControls.jsx и импортнуть сюда, тогда он будет выглядеть примерно так: 
        {createField("Email", "email", [required], Input)}*/}
          <div>
              <Field component = {Input} name={"email"} placeholder = {"Email"} validate={[required]} />
          </div>
          <div>
              <Field component = {Input} name={"password"} placeholder = {"Password"} validate={[required]} type = "password" />
          </div>
          <div>
              <Field component = {Input} name={'rememberMe'} type = {"checkbox"} /> remember me
          </div>
              {props.captchaUrl && <img src ={props.captchaUrl} />}
              {props.captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}
              {props.error && <div className={style.formSummaryError}>
              {props.error}
              </div>}
          <div>
              <button>Login</button>
          </div>
      </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login'
})(LoginForm)


type MapStateToPropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string

}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }
  if (props.isAuth) {
    return <Redirect to = {"/profile"} />
  }
  return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl ={props.captchaUrl} />

  </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType =>({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login})(Login);
