import React from 'react';
import { mount } from 'enzyme';
import '../../setupTest';
import { MemoryRouter } from 'react-router-dom';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <DashboardRoutes />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: 'Alex',
      logged: true
    }
  }

  test('Debe mostrarse correctamente', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.text-info').text().trim() ).toBe('Alex');
  });

})