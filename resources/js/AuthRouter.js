import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component}) {
  
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  //const activeRole = useSelector(state => state.auth.role);
  //const appropriate = restrictedTo ? activeRole === restrictedTo : true;

  return authenticated ? <Component /> : <Navigate to="/login"/>;
}

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/home" element={<PrivateRoute component={Home}/>} />
        <Route path="/" element={<Navigate to="/home" />} /> {/* react-router-dom v6 */}
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
