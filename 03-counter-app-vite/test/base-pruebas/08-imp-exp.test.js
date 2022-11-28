import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeoreById debe de devolver un heohe por id ', () => {
        
        const id = 1;

        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeoreById debe de retornar undefined si no existe el id', () => {
        const id = 100;

        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner  debe de regresar un arreglo de 3 heroes y deben de ser de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toHaveLength(3);
        expect(heroes).toEqual(expect.arrayContaining([expect.objectContaining({ owner:'DC'})]))
    });

    test('getHeroesByOwner  debe de regresar un arreglo de 2 heroes y deben de ser de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toHaveLength(2);
    });
});