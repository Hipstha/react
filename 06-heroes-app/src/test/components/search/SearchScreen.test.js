import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';
import '../../../setupTest';

describe('Pruebas en <SearchScreen />', () => {

  test('Debe mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={ SearchScreen } />
      </MemoryRouter>
    );
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.alert-info').text().trim() ).toBe('search a hero');
  });

  test('Debe mostrar a batman y el input con el valor del query string', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={ SearchScreen } />
      </MemoryRouter>
    );

    expect( wrapper.find('input').prop('value') ).toBe('batman');
    expect( wrapper ).toMatchSnapshot();
  }); 

  test('Debe mostrar un error si no se muestra hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmanasdf']}>
        <Route path="/search" component={ SearchScreen } />
      </MemoryRouter>
    );

    expect( wrapper.find('.alert-danger').exists() ).toBe(true);
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de llamar el push del history', () => {

    const history = {
      push: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmanasdf']}>
        <Route path="/search" 
               component={ () => <SearchScreen history={history} /> } 
        />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect( history.push ).toHaveBeenCalledWith('?q=batman')

  });

});