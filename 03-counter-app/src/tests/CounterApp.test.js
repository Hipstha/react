import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

  let wrapper = shallow( <CounterApp /> );

  beforeEach( () => {
    wrapper = shallow( <CounterApp /> );
  } )
  
  test('Debe mostrar <CounterApp /> correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe mostrar un valor de 100 por props', () => {
    const value = 100;
    const wrapper = shallow( <CounterApp value={value} /> );
    const texto = wrapper.find('h2').text();
    expect( Number(texto) ).toBe(value);
  });

  test('Debe de incrementar con el botón de +1', () => {  
    wrapper.find('button').at(0).simulate('click');
    const texto = wrapper.find('h2').text().trim();
    expect( texto ).toBe('11');
  });

  test('Debe de diminuir con el botón de -1', () => {  
    wrapper.find('button').at(2).simulate('click');
    const texto = wrapper.find('h2').text().trim();
    expect( texto ).toBe('9');
  });

  test('Debe colocar el valor por defecto con el btn reset', () => {
    const value = 105;
    const wrapper = shallow( <CounterApp value={value} /> );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const texto = wrapper.find('h2').text().trim();
    expect( texto ).toBe("105");

  })

});