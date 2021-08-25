import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import '../../../setupTest';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {

  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  )

  test('Debe mostrarse correctamente', () => {
    // snapshot
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe probar el dispatch y navegacion',() => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();
    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Alejandro'
      }
    });
    expect( history.replace ).toHaveBeenCalledWith('/');
    // localStorage.setItem('lastPath', '/dc');
    // handleClick();
    // expect( history.replace ).toHaveBeenCalledWith('/dc')
  });

})