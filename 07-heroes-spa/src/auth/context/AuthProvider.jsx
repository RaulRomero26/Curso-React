import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";
//ya no es necesario el initial state puesto que ya lo inicializo con el reducer y el init
// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user, //niegas el undefined, y niegas el false, si da true, devuelves el user
    user,
  }
}


export const AuthProvider = ({children}) => {

  const [ authState, dispatch ]= useReducer(authReducer,{},init);
  // aca se dispararia contra el backend, esta es una funcion de suposicion
  const login = (name = '') => {

    const user = { id:'ABC', name }

    const action = {
      type: types.login,
      payload:user
    }
    // como aca ya validaste vs backend este es el punto para almacenarlo en el local o session
    localStorage.setItem('user',JSON.stringify(user) )

    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {type: types.logout};
    dispatch(action);
  }
  //se expone la funcion de login (similar a un hook)
  //se expone todo el estado del contexto
  return (
    <AuthContext.Provider value={{
      //propiedades
      ...authState, //se hace el spread para tener las propiedades individuales
      //metodos o funciones
      login:login,
      logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  );
}
