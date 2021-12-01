import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import getStoredState from 'redux-persist/es/getStoredState';
 
const Login = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const authentification = (e) => {
        e.preventDefault();
        useDispatch()
    }

    return (
        <div className="window is-open transparent">
        <div className="window__content">
          <div className="main">
            {isAuthenticated && <Redirect
            to={{
              pathname: "/"
            }}
            /> }
            {/* <img className="logo logo__login" src={logo} /> */ }
            <form action="" id="form" autoComplete="off" method="post">
              <input type="text" placeholder="Nom d'utilisateur" id="username" onChange={event => setUsername(event.target.value)} autoFocus />
              <input type="password" placeholder="Mot de passe" id="password" onChange={event => setPassword(event.target.value)}/>
              <button onClick={authentification} className="auth__button">Se connecter</button>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default Login;