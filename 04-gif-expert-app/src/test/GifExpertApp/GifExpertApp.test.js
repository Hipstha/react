import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

  test('Debe cargar <GifExpertApp /> correctamente', () => {
    const wrapper = shallow( <GifExpertApp /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe mostrar una lista de categorias', () => {
    const categories = ['Pokemon', 'Dragon Ball'];
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
  });

});


