import { useContext } from "react"
import { UserConext } from "./context/UserContext";


export const LoginPage = () => {

  const {user,setUser} = useContext(UserConext);
  console.log( user);

  return (
    <>
        <h1>Login Page</h1>
        <hr/>

        <pre aria-label="pre">
          {JSON.stringify(user,null,3)}
        </pre>


        <button
          className="btn btn-primary"
          onClick={() => setUser({id:123,name:'Raul Romero',email:'raul.romerod26@gmail.com'})}
        >
          Establecer Usuario
        </button>
    </>
  )
}
