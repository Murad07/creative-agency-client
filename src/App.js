import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServicesList from './components/Dashboard/ServicesList/ServicesList';
import Review from './components/Dashboard/Review/Review';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path='/dashboard/:serviceName'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/serviceList/:serviceName'>
            <ServicesList></ServicesList>
          </Route>

          <Route path='/review/:serviceName'>
            <Review></Review>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;