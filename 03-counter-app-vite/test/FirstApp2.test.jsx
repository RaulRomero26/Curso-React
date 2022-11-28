import { render,screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirsApp />', () => {

    const title = 'hola, soy goku'
    const subtitle = 'soy un subtitulo'
    
   test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
   });

   test('debe de mostrar el mensaje "hola, soy goku', () =>{

        render( <FirstApp title={title}/>)
        expect( screen.getByText(title)).toBeTruthy();
        //screen.debug() sirve para ver el snapshot
   }); 

   test('debe de mostrar el titulo en un h1', () => {

        render( <FirstApp title={title}/>)
        expect(screen.getByRole('heading',{level: 1}).innerHTML).toBe(title); // o toContain
   });

   test('debe de mostrar el subtitulo enviado por props',() => {

       render( <FirstApp 
                   title={title}
                   subtitle={subtitle}
               />)
       expect(screen.getAllByText(subtitle).length).toBe(2);
   })

});