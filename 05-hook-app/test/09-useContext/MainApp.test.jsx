import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp"


describe('Pruebas en <MainApp />', () => {
  
    test('debe de Mostrar el HomePage ', () => {
      
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        //screen.debug();
        expect((screen.getByText('Home Page'))).toBeTruthy();

    })
    

    test('debe de Mostrar el LoginPage ', () => {
      
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        //screen.debug();
        expect((screen.getByText('Login Page'))).toBeTruthy();

    })
    

})
