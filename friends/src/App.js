import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { FriendsList } from './components/FriendsList'
import Login from './components/login'
import axiosWithAuth from './utils/axiosWithAuth';
import { Friend } from './components/Friend';

function App() {
  return (
    <>
    
    <Router>
    <div className="App">
    <div className='App-header'>
      
      <p>Auth Friends</p>
      <div className='links'>
        <Link to="/friends">Friends</Link>
        <Link to="/login">Login</Link> 
      </div>
    </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Login} />
        <Route path='/friends' component={FriendsList} />
        <Route component={FriendsList} />
      </Switch>
    </div>
  </Router>
  <FriendsList />
 </>
  );
}

export default App;


// <div className="App">
// <h1 className='App-header'>Auth Friends</h1>
// <Login />
// </div>