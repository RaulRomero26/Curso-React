import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Purebas en 02-template-string', () => {
    
    test('getSaludo debe retornar "Hola Raul', () => {
        const name = 'Raul'
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
});