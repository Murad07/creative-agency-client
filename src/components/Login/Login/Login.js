import React, { useState, useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import googleImg from '../../../images/logos/googleIcon.png';
import './Login.css';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

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
            <button onClick={handleGoogleSignIn} className='socialBtn'>
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
          <p>Don't have an account?  <a className='loginLink' onClick={handleGoogleSignIn}>Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
