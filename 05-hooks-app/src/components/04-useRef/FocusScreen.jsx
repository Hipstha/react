import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {

  const inputRef = useRef();
  // console.log( ref );

  const handleClick =() => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1>Focus screen</h1>
      <hr />

      <input type="text"
             ref={ inputRef }
             className="form-control"
             placeholder="Su nombre"
      />

      <br />

    <button className="btn btn-outline-primary"
            onClick={ handleClick }
    >
      focus
    </button>
    </div>
  );
};

export default FocusScreen