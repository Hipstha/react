import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

  //https://www.breakingbadapi.com/api/quotes/1
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        loading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        ) : (
          <blockquote className="blockquote text-right">
            <p>{ quote } </p>
            <footer className="blockquote-footer">{ author }</footer>  
          </blockquote>
        )
      }

      <br />

      <button onClick={() => increment(1)} className="btn btn-primary">
        Siguiente quote
      </button>

    </>


  );
};

export default MultipleCustomHooks;