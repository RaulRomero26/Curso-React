
import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout  } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn,startLoginWithEmailPassword,startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers');


describe('Prienas en auth thunks', () => { 

    test('debe de invocar el checking credentials', async() => { 
        
        const dispatch = jest.fn()

        await checkingAuthentication()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({"payload": undefined, "type": "auth/checkingCredentials"});

     })

    test('debe de llamar al checking credentials y el login -Exito', async() => { 
        const dispatch = jest.fn()
        
        const loginData = {ok: true, ...demoUser};
        await singInWithGoogle.mockResolvedValue(loginData)
        //thunk
        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))


     })

    test('debe de llamar al checking credentials y el logout mensaje de error', async() => { 
        const dispatch = jest.fn()
        
        const loginData = {ok: false, errorMessage: 'Un error en google'};
        await singInWithGoogle.mockResolvedValue(loginData)
        //thunk
        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))


     })

     test('startCreatingUserWithEmailPassword debe de llamar checking credentials y login exito', async () => { 
        const dispatch = jest.fn()
        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, passwor: '123456'};

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
      })

      test('startLogout debe de llamar logoutFirebase, clearnotes y logout', async() => { 
        const dispatch = jest.fn()
        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

       })
})