import * as actionTypes from "../constants/action_types";
import Axios from "axios";
import {toastr} from 'react-redux-toastr'

export const authenticated = (token, role, username) => ({
    type: actionTypes.AUTHENTICATED,
    payload: { token, role, username }
  });
export const unauthenticated = () => ({ type: actionTypes.UNAUTHENTICATED });


export const authorize = (username, password) => {
    return dispatch => {
      return Axios.post("https://shareio.cedricthonus.be/api/user/authenticate.php", {
        username: username,
        password: password
      })
        .then(function(response) {
          if (response.data.isLogged === true) {
            dispatch(
              authenticated(
                response.data.token,
                response.data.role,
                response.data.username
              )
            );
          } else {
            toastr.error("Mauvais identifiants");
          }
        })
    };
  };