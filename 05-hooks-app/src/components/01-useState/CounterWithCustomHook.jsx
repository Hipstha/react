// libraries
import React from 'react';

// hooks
import { useCounter } from '../../hooks/useCounter';

// style
import './Counter.css';

// custom hooks sirven para procesar data, la regresa con un simple return

const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter( 200 );

  return (
    <>
      <h1>Counter with Hook: { state }</h1>
      <hr />

      <button onClick={ () => increment(2) } className="btn btn-primary"> +1 </button>
      <button onClick={ reset } className="btn btn-danger"> Reset </button>
      <button onClick={ () => decrement(2) } className="btn btn-primary"> -1 </button>
    </>
  );
};

export default CounterWithCustomHook;