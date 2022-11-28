import { render,screen,fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => {

    const intialValue = 10;
    
    test('Debe de hacer match con el snapshot', () => {
        render( <CounterApp value={intialValue}/>)
        expect(screen).toMatchSnapshot();
    });

    test('Debe de mostrar el valor incial de 100', () =>{
        render(<CounterApp value={100}/>)
        expect(screen.getByText('100')).toBeTruthy();
    });

    test('Debe de incrementaro con el botoon +1', () => {
        render(<CounterApp value={intialValue}/>)
        fireEvent.click( screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe de decrementar con el botoon -1', () => {
        render(<CounterApp value={intialValue}/>)
        fireEvent.click( screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('Debe de resetear el contador con el boton de reset', () => {
        render(<CounterApp value={intialValue}/>)
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        //fireEvent.click( screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        
        expect(screen.getByText(intialValue)).toBeTruthy();

    });

});