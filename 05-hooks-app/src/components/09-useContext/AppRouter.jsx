import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// components
import NavBar from './NavBar';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';


const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={ HomeScreen } />
            <Route exact path="/about" component={ AboutScreen } />
            <Route exact path="/login" component={ LoginScreen } />

            {/* <Route component={ HomeScreen } /> */}
            <Redirect to="/" />
          </Switch>
        </div>


      </div>
    </Router>
  );
};

export default AppRouter;