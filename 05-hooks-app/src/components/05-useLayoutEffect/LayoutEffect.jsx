import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

const LayoutEffect = () => {

  //https://www.breakingbadapi.com/api/quotes/1
  const { counter, increment } = useCounter(1);

  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  // saca cosas a partir del renderizado del html
  useLayoutEffect(() => {
    console.log( pTag.current.getBoundingClientRect() );
  }, [quote]);

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={ pTag }>{ quote } </p>
      </blockquote>

      <br />

      <button onClick={() => increment(1)} className="btn btn-primary">
        Siguiente quote
      </button>

    </>


  );
};

export default LayoutEffect;