import React, {useState, useEffect} from 'react';
import SeachWithProjectList from './SeachWithProjectList/SeachWithProjectList';
import Products from './Pages/Products';

import './App.css';
import 'antd/dist/antd.css';
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/projects' component={Products}/>
          <Route path='/' component={SeachWithProjectList}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
