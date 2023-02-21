import { useContext } from "react";
import { UserConext } from "./context/UserContext";


export const HomePage = () => {

  const {user} = useContext(UserConext);

  return (
    <>
        <h1>Home Page <small>{user?.name}</small></h1>
        <hr/>

        <pre aria-label='pre'>
          {JSON.stringify(user,null,3)}
        </pre>
    </>
  )
}
