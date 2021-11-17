import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route exact path="/login" element={Login} />
        <PrivateRoute
          path="/home"
          element={Home}
        />
        <Route path="/" render={() => <Redirect to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
