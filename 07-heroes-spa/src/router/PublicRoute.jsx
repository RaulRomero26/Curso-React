import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"
//acuerdate los children son los hijos que envuelve el hoc
export const PublicRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

  return (!logged)
    ? children
    : <Navigate to="/marvel" />
}
