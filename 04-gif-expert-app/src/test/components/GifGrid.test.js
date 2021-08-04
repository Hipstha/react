import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'Pokemon';
  
  test('Debe cargar <GifGrid /> correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    }); // crea mock data en el fetch
    const wrapper = shallow( <GifGrid category={category} /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
    const gifs = [{
      id: 'abc',
      url: 'https://localhost/culauqier/cosa.jpg',
      title: 'cualquier cosa'
    }, {
      id: '123',
      url: 'https://localhost/culauqier/cosa.jpg',
      title: 'cualquier cosa'
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    }); // crea mock data en el fetch
    const wrapper = shallow( <GifGrid category={category} /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


  });

});