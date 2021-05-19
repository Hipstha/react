import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import PrimeraAPP from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

  // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {

  //   const saludo = 'Hola, soy Goku';

  //   const { getByText } = render( <PrimeraAPP saludo={ saludo } /> );

  //   expect( getByText(saludo) ).toBeInTheDocument();

  // });

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = "Hola, Soy goku";
    const wrapper = shallow( <PrimeraAPP saludo={saludo} /> );

    expect( wrapper ).toMatchSnapshot();

  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = "Hola, Soy goku";
    const subtitulo = "Soy un subtitulo"
    const wrapper = shallow( 
      <PrimeraAPP 
        saludo={saludo} 
        subtitulo={subtitulo}
      /> 
    );

    const textoParrafo = wrapper.find('p').text();

    expect( textoParrafo ).toBe( subtitulo );

  })

});