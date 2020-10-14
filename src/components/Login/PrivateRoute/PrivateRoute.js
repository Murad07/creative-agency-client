import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
              setLoggedInUser({ name: loggedInUser.name, email: loggedInUser.email, admin: data })
            });
    }, [])

    
    
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      
      const currentTime = new Date().getTime() / 1000;
      return decodedToken.exp > currentTime;
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;