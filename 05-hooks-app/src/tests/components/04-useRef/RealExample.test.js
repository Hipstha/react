import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {

  const wrapper = shallow( <RealExampleRef /> );

  test('Debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
  });

  test('Debe Mostrar el componente <MultipleCustomHooks />', () => {
    
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

  });

})