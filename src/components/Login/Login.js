import React, { useState, useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png'
import googleImg from '../../images/logos/googleIcon.png';
import './Login.css';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
        };
        console.log(res);
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-md-center'>
        <div className='col-xs-12 col-sm-4 col-md-4 m-auto'>
          <Link to='/'>
            <img
                className='d-block mx-auto my-3'
                height='60'
                src={logo}
                alt='Brand Loge'
            />
          </Link>
        </div>
      </div>
      <div className='login-form'>
        <div className='mx-auto'>
          <h5 className='text-center'>Login With</h5>
          <div className='pt-3'>
            <button onClick={googleSignIn} className='socialBtn'>
              <img
                src={googleImg}
                height='25'
                width='25'
                alt=''
                className='mr-5'
              />
              Continue With Google
            </button>
          </div>
          <p>Don't have an account?  <a className='loginLink' onClick={googleSignIn}>Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
