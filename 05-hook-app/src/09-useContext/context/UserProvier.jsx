import { useState } from "react"
import { UserConext } from "./UserContext"

// const user = {
//     id: 123,
//     name:'Raul Romero',
//     email: 'raul.romerod26@gmail.com'
// }

export const UserProvier = ({children}) => {

    const [user, setUser] = useState()



  return (
    <>
        <UserConext.Provider value={{ user, setUser }}>
            {children}
        </UserConext.Provider>
    </>
  )
}
