import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe("Prueba en 05-funciones", () => {

  test('getUser Debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const user = getUser();
    expect( user ).toEqual( userTest );
  });

  test('getUsuarioActivo Debe retornar un objeto', () => {
    const username = "Alejandro";
    const userTest = {
      uid: 'ABC567',
      username: 'Alejandro'
    };
    const user = getUsuarioActivo( username );
    expect( user ).toEqual( userTest );
  });

});