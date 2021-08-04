import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn(); // función desde jest para evaluar
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });

  test('Debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  // simular change
  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } }); // event
    expect( wrapper.find('p').text() ).toBe( value );
  });

  // simular un submit
  test('No debe postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Pokemon';
    let input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).toHaveBeenCalled(); // se debe llamar
    expect( setCategories ).toHaveBeenCalledTimes(1); // se debe llamar 1 sola vez
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // debe tener una función como argumento
    expect( input.prop('value') ).toBe('');

    /*
      Simular el inputChange
      simular el submit
      llamar el setCategories
      value del input debe estar como string vacío ''
    */
  });

});