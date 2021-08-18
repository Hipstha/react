import { todoReducer } from "../../../components/08-useReducer/todoReducer";

import { demoTodos, addTodo } from '../../fixtures/demoTodos';

describe('Pruebas en mi todoReducer', () => {
  
  test('Debe retornar el estado por defecto', () => {

    const state = todoReducer( demoTodos, {});
    expect( state ).toEqual( demoTodos );

  });

  test('Debe agregar un TODO', () => {

    const newTodo = {
      id: 3,
      desc: 'Aprender Express',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    }


    const state = todoReducer( demoTodos, action);
    expect( state.length ).toEqual( 3 );
    expect( state ).toEqual([ ...demoTodos, newTodo ])

  });

  test('debe borrar un TODO', () => {
    // action payload = ID del TODO
    const action = {
      type: 'delete',
      payload: 1
    }

    const state = todoReducer( demoTodos, action );
    expect( state.length ).toEqual( 1 );
    expect( state ).toEqual( [demoTodos[1]] );
  });

  test('debe hacer el TOGGLE del TODO', () => {
    // action payload = ID del TODO
    const action = {
      type: 'toggle',
      payload: 1
    }

    const state = todoReducer( demoTodos, action );
    expect( state[0].done ).toEqual( true );
    expect( state[1] ).toEqual( demoTodos[1] );
  });

});