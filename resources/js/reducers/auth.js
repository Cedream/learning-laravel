import * as actionTypes from "../constants/action_types";

const initialState = {
    isAuthenticated : false, 
    token: "",
    role: "",
    username: ""
};

export default function(state=initialState, action) {
    switch(action.type) {
      case actionTypes.AUTHENTICATED:
        return { 
          ...state, 
          isAuthenticated: true, 
          token: action.payload.token, 
          role : action.payload.role, 
          username : action.payload.username
        };
      case actionTypes.UNAUTHENTICATED:
        return { 
          ...state, 
          isAuthenticated: false, 
          token: "",
          role: "",
          username: ""
        };
      default:
        return state;
    }
  }