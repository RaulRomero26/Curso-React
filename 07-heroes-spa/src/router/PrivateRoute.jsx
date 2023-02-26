import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth"

//si recibes el children estas declarando un hoc high order component
export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

  return (logged)
        ? children
        : <Navigate to="/login" />
}
