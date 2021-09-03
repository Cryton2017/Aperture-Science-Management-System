import React, { Component } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import { Auth } from '../src/auth';

import Home from './Home/Home';
import facilitatorLogin from './FacilitatorLogin/FacilitatorLogin';
import testSubjectLogin from './testSubjectLogin/testSubjectLogin';
import facilitatorDashboard from './facilitatorDashboard/facilitatorDashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
  Auth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to={{
        pathname: '/'
      }} />
  )} />
  
)

class App extends Component {
  render() {
    return (
      <div>
        <PrivateRoute exact path='/facilitator/Dashboard' component={facilitatorDashboard} />
        <Route exact path="/" component={Home} />
        <Route exact path="/facilitatorLogin" component={facilitatorLogin} />
        <Route exact path="/testSubjectLogin" component={testSubjectLogin} />
      </div>
    );
  }
}

export default App;