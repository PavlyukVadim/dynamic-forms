import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import InitialComponent from './components/InitialComponent';
import AdminApp from './../AdminApp';
import UserApp from './../UserApp';
import Authorization from './containers/Authorization';
import Registration from './containers/Registration';

const App = () => (
  <div>
    <Route path='/' exact component={InitialComponent} />
    <Route path='/signin' exact component={Authorization} />
    <Route path='/signup' exact component={Registration} />
    <Route path='/admin' component={AdminApp} />
    <Route path='/user' component={UserApp} />
  </div>
);

export default App;
