import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // fancy JS to pull the component prop out of the props obj
  // use the ...rest operator
  // rename component to Component
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token')
        ? (
          <Component {...props} />)
        : (
          <Redirect to='/' />
        )
      }
    />
  );
};
