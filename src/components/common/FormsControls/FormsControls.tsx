import { FieldValidatorType } from '../../../utils/validators/validators';
import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import styles from './FormsControls.module.css';


export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error;
  return (
      <div className = {styles.formControl + " " + (hasError ? styles.error : "")}>
          <div>
              <textarea {...input} {...props}/>
          </div>
          {hasError && <span>{meta.error}</span>}
      </div>
  )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error;
  return (
      <div className = {styles.formControl + " " + (hasError ? styles.error : "")}>
          <div>
              <input {...input} {...props}/>
          </div>
          {hasError && <span>{meta.error}</span>}
      </div>
  )
}

export function createField<FieldKeys extends string> (placeholder: string,
                            name: FieldKeys, 
                            validators: Array<FieldValidatorType>, component: React.FC<WrappedFieldProps>, props = {}, text = "") {
return    <div>
        <Field placeholder ={placeholder} name ={name}
               validate = {validators}
               component ={component}
               {...props}
                /> {text}
    </div>
                            }
