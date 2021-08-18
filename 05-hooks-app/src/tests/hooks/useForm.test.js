import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Pruebas sobre useForm', () => {
  
  const initialForm = {
    name: 'Alejandro',
    email: 'alex@alex.com'
  };

  test('Debe de regresar un formulario por defecto', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ formValues, handleInputChange, reset ] = result.current;

    expect( formValues ).toEqual( initialForm );
    expect( typeof handleInputChange ).toBe('function');
    expect( typeof reset ).toBe('function');
  });

  test('Debe de cambiar el valor del formulario', () => {
    // cambiar name
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ , handleInputChange ] = result.current;

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      });
    });

    const [ formValues ] = result.current;
    expect( formValues ).toEqual( { ...initialForm, name: 'Melissa' } );

  });

  test('Debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ , handleInputChange, reset ] = result.current;

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      });
      reset();
    });

    const [ formValues ] = result.current;
    expect( formValues ).toEqual( initialForm );

  });



});