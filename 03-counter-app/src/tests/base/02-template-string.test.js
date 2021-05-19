import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Prueba en 02-template-string.js', () => {

  test('getSaludo debe retornar hola fernando', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo( nombre );
    expect( saludo ).toBe( 'Hola ' + nombre + "!");
  });

  test('getsaludo debe retornar Hola Alejandro! si no hay argumento en el nombre', () => {
    const saludo = getSaludo();
    expect( saludo ).toBe( 'Hola Alejandro!');
  })

});