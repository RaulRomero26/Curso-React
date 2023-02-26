import { types } from "../types/types";

const initialState = {
    logged: false,

}

export const authReducer = ( state = initialState, action ) => {
    
    switch (action.type) {

        case types.login:
             return{
                ...state,//por si muta y necesitas tener mas propiedades en la sesion
                logged: true,
                user: action.payload
             };

        case types.logout:
             return{
                logged : false,
             };
    
        default:
            return state;
    }
}