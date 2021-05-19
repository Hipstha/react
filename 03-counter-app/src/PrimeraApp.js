import React from 'react';
import PropTypes from 'prop-types';

// FC
const PrimeraAPP = ( { saludo, subtitulo } ) => {

  return (
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
      <p>{ subtitulo }</p>
    </>
  );
};

PrimeraAPP.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraAPP.defaultProps = {
  subtitulo: "Default"
}

export default PrimeraAPP;