import React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {

  const setUser = jest.fn();

  // wrapper
  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }} >
      <LoginScreen />
    </UserContext.Provider>
    );
  // mount

  test('Debe mostrarse correctamente', () => {
    // snapshot
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('Debe ejecutar el setUser con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();
    expect( setUser ).toHaveBeenCalledWith({
      id: 1234,
      name: 'Alejandro'
    });
  });

})