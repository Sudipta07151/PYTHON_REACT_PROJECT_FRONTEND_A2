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
      const decode=jwt_decode(getToken);
      console.log('Decoded Token:',decode);
      dispatch('LOGIN',{
        user:decode
      })
    }else{
      dispatch('LOGIN',{
        user:null
      })
    }
  },[]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
