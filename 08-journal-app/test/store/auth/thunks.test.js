
import { checkingAuthentication } from "../../../src/store/auth/thunks"

jest.mock('../../../src/firebase/providers');


describe('Prienas en auth thunks', () => { 

    test('debe de invocar el checking credentials', async() => { 
        
        const dispatch = jest.fn()

        await checkingAuthentication()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({"payload": undefined, "type": "auth/checkingCredentials"});

     })

})