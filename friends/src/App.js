import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import { FriendsList } from './components/FriendsList'
import Login from './components/login'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className='App-header-nav'>
            <p>Auth Friends</p>
            <div className='links'>
              <Link to="/friends">Friends</Link>
              <Link to="/login">Login</Link> 
            </div>
          </div>
          <PrivateRoute path='/friends'component={FriendsList}/>
          <Switch>
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;