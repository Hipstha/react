import React from 'react';
import { Redirect, Route } from 'react-router';
import { Switch } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroeScreen from '../components/heroes/HeroeScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <Switch>
          <Route exact path='/marvel' component={ MarvelScreen } />
          <Route exact path='/hero/:heroeId' component={ HeroeScreen } />
          <Route exact path='/dc' component={ DcScreen } />
          <Route exact path='/search' component={ SearchScreen } />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;