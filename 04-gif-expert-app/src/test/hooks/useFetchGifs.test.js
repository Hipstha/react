import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'; // librería para probar hooks

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Pokemon' ) );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBe( true );
  });

  test('Debe de retornar un arreglo de imágenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Pokemon' ) );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );
  });

});