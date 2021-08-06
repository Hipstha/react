import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../helpers/procesoPesado';
import '../02-useEffect/effects.css';


export const MemoHook = () => {

  const { counter, increment } = useCounter(5000);
  const [ show, setShow ] = useState(true);
  
  // hace que las cosas no se vuelvan a iterar por useSelectors
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo hook</h1>
      <h3>Counter: <small>{counter}</small></h3>
      <hr />

      <p>{ memoProcesoPesado }</p>

      <button
        className="btn btn-primary"
        onClick={ () => increment(1) }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow( !show );
        }}
      >
        show / hide { JSON.stringify( show )}
      </button>


    </div>
  );
};

export default MemoHook;