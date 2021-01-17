import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
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
              {props.captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}
              {props.error && <div className={style.formSummaryError}>
              {props.error}
              </div>}
          <div>
              <button>Login</button>
          </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
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

const mapStateToProps = (state) =>({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login})(Login);
