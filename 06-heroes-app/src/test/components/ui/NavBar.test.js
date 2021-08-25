import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import '@testing-library/jest-dom';
import '../../../setupTest';
import { types } from '../../../types/types';


describe('Pruebas en <NavBar />', () => {

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
    location: {}
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Alex'
    }
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter>
        <Router history={ historyMock }>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.text-info').text().trim() ).toBe('Alex');
  });

  test('Debe llamar el logout y el usar el history ', () => {
    wrapper.find('button').prop('onClick')();
    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.logout
    });
    expect( historyMock.replace ).toHaveBeenCalledWith('/login');
  });

});