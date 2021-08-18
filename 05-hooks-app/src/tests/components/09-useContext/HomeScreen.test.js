import React from 'react';
import { mount, shallow } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen /> ', () => {

  const user = {
    name: 'Fernando',
    email: 'fernando@gmail.com'
  }

  // mount es cuando se necesita todo en general
  const wrapper = mount( 
    <UserContext.Provider value={{
      user
    }} >
      <HomeScreen />
    </UserContext.Provider>
  )

  test('Debe mostrar el componente <HomeScreen />', () => {

    expect( wrapper ).toMatchSnapshot();

  });

});