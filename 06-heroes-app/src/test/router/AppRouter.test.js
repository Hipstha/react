import '../../setupTest';
import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  test('Debe mostrar el loggin si no está autenticado', () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>  
    );

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar el componente de marvel si está autenticado',() => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: 'Alex',
        logged: true
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>  
    );

    expect( wrapper.find('.navbar').exists() ).toBe(true);
  });

})