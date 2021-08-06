import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example ref</h1>
      <hr />

      { show && <MultipleCustomHooks /> }
      
      <button onClick={() => {
        setShow(!show)
      }} className="btn btn-primary">
        show / hide
      </button>
      
    </div>
  );
};

export default RealExampleRef;