import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import { UsersList } from './components/UsersList'
import Login from './components/login'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className='App-header-nav'>
            <p>Auth Users</p>
            <div className='links'>
              <Link to="/users">Users</Link>
              <Link to="/login">Login</Link> 
            </div>
          </div>
          <PrivateRoute path='/users'component={UsersList}/>
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