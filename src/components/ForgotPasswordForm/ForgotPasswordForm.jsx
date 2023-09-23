import React from 'react';
import styles from './ForgotPasswordForm.module.scss';
import TextField from '../formFields/textField/textField';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
          .required('Email is required')
          .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email address'),
    }),
    onSubmit: (values) => {
      if (!isFormValid) return;
      console.log(JSON.stringify(values, null, 2));
      const redirect = '/';
      dispatch(recover({payload: values, redirect}));
    },
  });
  const isFormValid = Object.keys(formik.errors).length === 0;
  return (
    <div className={styles.forgotPasswordForm} data-testid="ForgotPasswordForm">
      <div className={styles.titleBlock}>
        <p>
          recover password
        </p>
        <span>
        Please enter your e-mail address:
        </span>
      </div>
      <form className={styles.form}>
        <TextField
          label='Email'
          name='email'
          placeholder={'example@ex.com'}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
        />
        <button
          disabled={!isFormValid}
          type='submit'
        >
          <span>
            recover
          </span>
        </button>
      </form>
      <p>
        Do you remember your password?{'  '}
        <NavLink
          to="signUp"
          role="button"
        >
          {' '}
          <span>Back to sign in</span>
        </NavLink>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
