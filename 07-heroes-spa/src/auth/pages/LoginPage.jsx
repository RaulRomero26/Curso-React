import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

	const {login} = useContext(AuthContext) //pides el contexto en este caso el del auth

	const navigate = useNavigate();

	const onLogin = ()=> {
		//realizas el logeo y despues rediriges
		login('Raul Romero')//en este ejemplo solo pide el nombre aca se tomarian los values del form
		navigate("/", { options: { replace: true }})
	}

  return (
    <>
        <div className="container mt-5">
            <h1>Login</h1>
			<hr />

			<button
				className='btn btn-primary'
				onClick={ onLogin }
			>
				Login
			</button>
        </div>
    </>
  )
}
