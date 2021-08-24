import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

// components
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';

const AppRouter = () => {

  const { user } = useContext( AuthContext );

  return (
    <Router>
      <div>

        {/* <Navbar /> */}

        <Switch>
          <PublicRoute path="/login" 
                       exact
                       component={ LoginScreen } 
                       isAuthenticated={ user.logged }
          />
          <PrivateRoute path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;