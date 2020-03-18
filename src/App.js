import React from 'react';
import './App.css';

import Home from './pages/Home';
import Members from './pages/Members';
import AMember from './pages/SingleMember';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/members" component={Members}/>
        <Route exact path="/members/:slug" component={AMember}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
