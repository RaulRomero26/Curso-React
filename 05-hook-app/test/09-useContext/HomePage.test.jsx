import { render,screen } from "@testing-library/react"
import { UserConext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"


describe('Pruebas en el <HomePage />', () => { 
    
    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('Debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserConext.Provider value={{user: null}}>
                <HomePage/>
            </UserConext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null');
     })


     test('Debe de mostrar el componente con el usuario', () => { 
        
        render(
            <UserConext.Provider value={{user: user}}>
                <HomePage/>
            </UserConext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name); 
        expect(preTag.innerHTML).toContain(user.id.toString()); //test comment
     })

 })