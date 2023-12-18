import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../../axios/axios.instance';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

function Login() {
  const [status, setStatus] = useState('');
  const navigation = useNavigate();
  const ref = useRef();

  useEffect(() => {
    axiosInstance.post('/auth').then((res)=>{ setStatus(res?.data?.message); navigation('/home');}).catch(err => console.log(err));
  },[])

  const loginUser = (value) => {
    axiosInstance.post('/auth',value).then((res)=>{ localStorage.setItem('authToken', res?.data?.authToken);setStatus(res?.data?.message); navigation('/home');}).catch(err => setStatus(err?.response?.data?.message))
  }

  const showPassword = () => {
    ref.current.type = 'text';
  }

  const hidePassword = () => {
    ref.current.type = 'password';
  }

  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className="row">
        <div className={`col-sm-12 ${styles.backgroundImage}`}>
          <div className={`${styles.loginContent}`}>
            <div className={`text-center ${styles.logo}`}>
              <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="logo.svg" />
              <h6 className={`text-white ${styles.logoText}`}>Online Project Management</h6>
            </div>
            <Formik initialValues={{ email: '', password: '' }} validationSchema={SignupSchema} onSubmit={(value) => loginUser(value)}>
              {({ errors, touched }) => (
                <Form className={`${styles.form}`}>
                  <h5 className={`mb-5 ${styles.formHeader}`}>Login to get started</h5>
                  <div className="form-group">
                    <label className={`${(errors.email && touched.email) ? styles.errorLabel : ''}`} htmlFor="email" >Email</label>
                    <Field type="email" className={`form-control ${styles.input} ${(errors.email && touched.email) ? styles.errorInputfield : ''}`} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <div>{errors.email && touched.email ? (<div className='text-danger'>{errors.email}</div>) : null}</div>
                  </div>
                  <div className="form-group">
                    <label className={`${(errors.password && touched.password) ? styles.errorLabel : ''}`} htmlFor="password">Password</label>
                    <div className={`${styles.passwordWrapper}`}>
                      <Field type="password" innerRef={ref} className={`form-control d-inline ${styles.input} ${(errors.password && touched.password) ? styles.errorInputfield : ''}`} name="password" id="password" placeholder="Password" />
                      <img className={`${styles.hidePassword}`} onMouseDown={showPassword} onMouseUp={hidePassword} src={`${process.env.PUBLIC_URL + '/images/hide-password.svg'}`} alt="" />
                    </div>
                    <div>{errors.password && touched.password ? (<div className='text-danger'>{errors.password}</div>) : null}</div>
                    <div className={`text-right ${styles.forgetPassword} mt-2`}>Forget Password?</div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className={`btn text-white ${styles.button}`}>Login</button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className={`${styles.errorLabel} mt-4 text-center`}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
