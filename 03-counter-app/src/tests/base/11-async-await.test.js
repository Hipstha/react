import '@testing-library/jest-dom';

describe('Pruebas con async-await y Fetch', () => {

  test('Debe retornar el url de imagen', async () => {

    const url = await getImagen();
    
    expect( url.includes('https://') ).toBe( true );

  });

});