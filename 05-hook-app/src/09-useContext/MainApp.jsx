import { Navigate, Route, Routes, Link } from "react-router-dom"
import { UserProvier } from "./context/UserProvier"

import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <UserProvier>
        {/* <h1>Main App</h1> */}
            <NavBar/>
        <hr />


        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="about" element={ <AboutPage/> }/>

            {/* <Route path="/*" element={<LoginPage/>}/> */}
            <Route path="/*" element={ <Navigate to="/about"/>}/>

        </Routes>
    </UserProvier>
  )
}
