import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from "../../hooks/useFetch";


describe('Pruebas en useFetch', () => {

  test('Debe traer la información por defecto', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

    const { data, loading, error } = result.current;
    expect( data ).toBe( null );
    expect( loading ).toBe( true );
    expect( error ).toBe( null );
  });

  test('Debe tener la info deseada, loading false, error en false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect( data.length ).toBe(1);
    expect( loading ).toBe( false );
    expect( error ).toBe( null );
 
  });

  test('Debe manejar el error', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2') );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect( data ).toBe(null);
    expect( loading ).toBe( false );
    expect( error ).toBe( 'No se pudo cargar la info' );
 
  });



});