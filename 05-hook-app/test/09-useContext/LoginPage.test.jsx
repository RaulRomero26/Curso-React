import { fireEvent, render, screen } from "@testing-library/react";
import { UserConext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebeas en el <LoginPage />', () => { 
    
    test('debe de mostrar el componente sin el usuario', () => {
      
        render(
            <UserConext.Provider value={{user: null}}>
                <LoginPage />
            </UserConext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        
        const setUserMcok = jest.fn()

        render(
            <UserConext.Provider value={{user: null, setUser: setUserMcok }}>
                <LoginPage />
            </UserConext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMcok).toHaveBeenCalledWith({"email": "raul.romerod26@gmail.com", "id": 123, "name": "Raul Romero"});

    });
    
    

 })