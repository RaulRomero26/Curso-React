import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
       //console.log(credentials);
        const { displayName, email, photoURL, uid } = result.user;
        
        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
       const errorCode = error.code;
       const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}


export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid,photoURL} = resp.user;
        console.log(resp)
        //TODO actualizar el display name en firebase
        return {
            ok: true,
            uid, photoURL, email,displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}