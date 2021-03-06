import { createContext, useReducer,useEffect } from "react";
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
      case "LOGOUT":
        return{
          ...state,
          user:action.payload
        }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady:false
  });
  console.log('AuthContext State',state);


  useEffect(()=>{
    const getToken=localStorage.getItem('access_token');
    console.log('Token:',getToken);
    if(getToken){
      const user = jwt_decode(getToken);
      dispatch({ type: "LOGIN", payload: user });
    }else{
      dispatch({ type: "LOGIN", payload: null });
    }
  },[]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
