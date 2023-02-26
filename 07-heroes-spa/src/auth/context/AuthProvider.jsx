import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

const initialState = {
    logged: false,
}


export const AuthProvider = ({children}) => {

  const [ authState, dispatch ]= useReducer(authReducer,initialState);
  // aca se dispararia contra el backend, esta es una funcion de suposicion
  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    dispatch(action)
  }
  //se expone la funcion de login (similar a un hook)
  //se expone todo el estado del contexto
  return (
    <AuthContext.Provider value={{
      ...authState, //se hace el spread para tener las propiedades individuales
      login:login
    }}>
        {children}
    </AuthContext.Provider>
  );
}
