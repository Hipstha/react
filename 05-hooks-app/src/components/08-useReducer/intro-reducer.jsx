const initialState = [{
  id: '1',
  todo: 'Comprar leche',
  done: false
}];

// un reducer simepre regresa un estado
// siempre pide un state y una action
// siempre regresa un satate
const todoReducer = ( state = initialState, action ) => {

  // se regresa el nuevo elemento del state
  if ( action?.type === 'agregar' ) {
    return [
      ...state,
      action.payload
    ];
  };

  return state;
};

let todos = todoReducer();

// se agrega mediante la accion
const newTodo = {
  id: '2',
  todo: 'Comprar pan',
  done: false
};

// se crea una acción
const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
};

todos = todoReducer( todos, agregarTodoAction );

console.log( todos );
