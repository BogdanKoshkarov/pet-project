import React, {useEffect, useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, signUp, signUpWithGoogle} from '../../store/userSlice';
import GoogleIcon from '../svg/googleIcon/googleIcon';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaRegisterForm} from '../../utils/validationSchema';
import googleService from '../../services/google.service';
import TextField from '../formFields/textField/textField';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrors());
  const [registerError, setRegisterError] = useState(null);
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchemaRegisterForm,
    onSubmit: (values) => {
      if (!isFormValid) return;
      setRegisterError(authError);
      console.log(JSON.stringify(values, null, 2));
      dispatch(signUp(values));
    },
  });
  const googleRegister = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      googleService.get(accessToken).then((userInfo) => dispatch(signUpWithGoogle(userInfo)));
    },
  });
  const isFormValid = Object.keys(formik.errors).length === 0;
  useEffect(()=>{
    setRegisterError(authError);
  }, [authError]);
  useEffect(()=>{
    setRegisterError(null);
  }, [formik.values]);
  return (
    <div className={styles.registerForm}>
      <div className={styles.titleBlock}>
        <p>
          Sign up
        </p>
        <span>
          Welcome! Please enter your details
        </span>
      </div>
      <div>
        {registerError &&
          <div className={styles.registerError}>
            <span>
              {registerError}
            </span>
          </div>
        }
      </div>
      <div className={styles.inputsBlock}>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label='First name'
            name='name'
            placeholder={'Enter your first name'}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
          />
          <TextField
            label='Last name'
            name='surname'
            placeholder={'Enter your last name'}
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.surname}
          />
          <TextField
            label='Email'
            name='email'
            placeholder={'example@ex.com'}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
          />
          <TextField
            type='password'
            label='Password'
            name='password'
            placeholder='**********'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
          />
          <TextField
            type='password'
            label='Confirm password'
            name='confirmPassword'
            placeholder='**********'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.confirmPassword}
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={styles.button}
          >
            <span>
              Sign up
            </span>
          </button>
        </form>
        <div className={styles.socialButtonsBlock}>
          <div className={styles.divider}>
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <div>
            <div
              id='signUpDiv'>
            </div>
            <button className={styles.googleButton}
              onClick={()=> googleRegister()}
            >
              <GoogleIcon />
              <span>
                Sign up with Google
              </span>
            </button>
          </div>
        </div>
      </div>
      <p>
        Already have account?{'  '}
        <NavLink
          to="login"
          role="button"
        >
          {' '}
          <span>Sign in</span>
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
