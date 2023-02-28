import { fireEvent, render, screen } from "@testing-library/react"; 
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en el componente del <Navbar />', () => { 

    const contextValue = {
        logged: true,
        user: { id: '123', name: 'Raul Romero' },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario ', () => {
      
        render(
          <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
          </AuthContext.Provider>
            
        );
        
        expect(screen.getByText('Raul Romero')).toBeTruthy();
    })

    test('debe de llamar el logout y el navigate cuando se hace click en el boton', () => {
    
        render(
            <AuthContext.Provider value={contextValue}>
                  <MemoryRouter>
                      <Navbar/>
                  </MemoryRouter>
            </AuthContext.Provider>
              
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});

    })
    
    
 });