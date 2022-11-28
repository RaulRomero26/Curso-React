import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirsApp />', () => {
    
    // test('Debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola, soy goku'
        
    //    const { container } = render( <FirstApp title={title}/>)

    //    expect(container).toMatchSnapshot();

    // });

    test('Debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, soy goku'
        const { container, getByText, getByTestId } = render( <FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // //expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);

        //expect(getByTestId('test-title').innerHTML).toBe(title); //mas estricto
        expect(getByTestId('test-title').innerHTML).toContain(title);//menos estricto

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, soy goku'
        const subtitle = 'Soy un subtitulo'
        const { getByText} = render( 
            <FirstApp 
                title={title}
                subtitle={subtitle}
            />)

        expect(getByText(subtitle)).toBeTruthy(); //allBy es getBy pero para muchos elementos que pueden tener la misma info
        //expect(getByTestId('test-title').innerHTML).toContain(title);//menos estricto

    });

});