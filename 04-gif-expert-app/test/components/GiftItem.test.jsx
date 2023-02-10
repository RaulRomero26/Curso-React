import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en <GiftItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot ' , () => {

       const {container} = render(<GiftItem title={title} url={url}/>);

       expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL Y el ALT indicado', () => {
        render(<GiftItem title={title} url={url}/>);
        //screen.debug(); //para ver que componetne o como es en log
        //expect(screen.getByRole('img').src).toBe(url);
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el titulo en el componente',() => {
        render(<GiftItem title={title} url={url}/>);
        expect( screen.getByText(title)).toBeTruthy();
    })
});