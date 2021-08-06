// se usa cuando quieres que se detenga un proceso cuando algo se renderiza de nuevo y el memo no lo puede detener

import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/effects.css';

const CallbackHook = () => {

  const [ counter, setCounter ] = useState(10);

  // const increment = () => {
  //   setCounter( counter + 1);
  // }

  const increment = useCallback((num) => {
    setCounter( c => c + num);
  }, [ setCounter ]);

  return (
    <div>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ increment } />
      
    </div>
  );
};

export default CallbackHook;