import { authReducer } from '../../auth/authReducer';
import '@testing-library/jest-dom';
// const state = {
//   name: 'Fernando',
//   logged: true
// };

describe('Pruebas en authReducer', () => {

  const initialState = {
    logged: false
  };

  const init = {
    name: 'Alejandro',
    logged: true
  }

  test('Debe retornar el estado por defecto', () => {
    const action = {
      type: 'default'
    };
    const state = authReducer( initialState, action );
    expect( state ).toEqual( initialState );
  });

  test('Debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: '[auth] login',
      payload: {
        name: 'Alejandro',
      }
    };
    const state = authReducer( initialState, action );
    expect( state ).toEqual( init );
  });

  test('Debe borrar el name del usuario y logged en false', () => {
    const action = {
      type: '[auth] logout'
    };
    const state = authReducer( initialState, action );
    expect( state ).toEqual( initialState );
  });

})