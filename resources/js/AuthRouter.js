import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, restrictedTo, ...rest }) {
  
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  //const activeRole = useSelector(state => state.auth.role);
  //const appropriate = restrictedTo ? activeRole === restrictedTo : true;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
            <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/home"
          component={Home}
        />
        <Redirect  from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRouter;
