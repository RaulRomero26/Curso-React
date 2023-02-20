import { useContext } from "react";
import { UserConext } from "./context/UserContext";


export const AboutPage = () => {

  const {user} = useContext(UserConext);

  return (
    <>
        <h1>About Page</h1>
        <hr/>

        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
    </>
  )
}
