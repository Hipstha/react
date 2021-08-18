import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../hooks/useFetch';


jest.mock('../../hooks/useFetch');


describe('Pruebas en <MultipleCustomHooks />', () => {
  test('Debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks />);
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar la información', () => {
    
    useFetch.mockReturnValue({
      data: [{
        author: 'Alejandro',
        quote: 'Hola mundo'
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow( <MultipleCustomHooks />);

    expect( wrapper.find('.alert').exists() ).toBe( false );
    expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola mundo' );
    expect( wrapper.find('footer').text().trim() ).toBe( 'Alejandro' );

    // console.log( wrapper.html() );


  });

})