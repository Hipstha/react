import React from 'react';
import { mount } from 'enzyme';

import '../../../setupTest';
import HeroeScreen from '../../../components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {

  const history = {
    length: 10,
    goBack: jest.fn(),
    push: jest.fn()
  }

  
  test('Debe mostrar el componente redirect si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroeScreen history={history} />
      </MemoryRouter>
    );
    expect( wrapper.find('Redirect').exists() ).toBe(true)
  });

  test('Debe mostrar un hero en caso de que el parametro exista', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" component={ HeroeScreen } />
      </MemoryRouter>
    );
    expect( wrapper.find('.row').exists() ).toBe(true);
    
  });

  test('Debe regresar a la pantalla anterior con PUSH', () => {

    const history = {
      length: 1,
      goBack: jest.fn(),
      push: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" 
               history={history} 
               component={ () => <HeroeScreen history={ history } />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect( history.push ).toHaveBeenCalledWith('/');
    expect( history.goBack ).not.toHaveBeenCalled();

  });

  test('Debe regresar a la pantalla anterior con goBack', () => {

    const history = {
      length: 10,
      goBack: jest.fn(),
      push: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" 
               history={history} 
               component={ () => <HeroeScreen history={ history } />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect( history.goBack ).toHaveBeenCalled();
    expect( history.push ).not.toHaveBeenCalled();

  });

  test('Debe llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider1111']}>
        <Route path="/hero/:heroeId" 
               component={() => <HeroeScreen history={ history } />}
        />
      </MemoryRouter>
    );

    expect( wrapper.text() ).toBe('');
  })

});