import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el use counter', () => { 
    
    test('Debe de retornar los valores por defector', () => { 
        
        const {result} = renderHook(() => useCounter());
        const {counter,increment,decrement,reset} = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual(expect.any(Function));
        expect( increment ).toEqual(expect.any(Function));
        expect( reset ).toEqual(expect.any(Function));
     })

     test('Debe de generar el counter con el valor de 100', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;
        expect( counter ).toBe(100)
      })

      test('Debe de incrementar el contador', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;
        //el act resetea al valor original del couter si se le mandan varias incrementos
        //no se "suman" para que se sumen desde el state debe de ser (current) => current+value
        act(() => {
            increment();
        })
        //por que cuando se extrae o se toma solo el counter no pasa los valores
        //a evaluar son los valores del resultado
        expect(result.current.counter).toBe(101);

       })

       test('Debe de decrementar el contador', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;
        act(() => {
            decrement();
        })
        
        expect(result.current.counter).toBe(99);

       })

       test('Debe de restear el contador', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {decrement,reset} = result.current;
        act(() => {
            decrement();
            reset();
        })
        
        expect(result.current.counter).toBe(100);

       })


 })