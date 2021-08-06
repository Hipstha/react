import React from 'react';

// use memo sirve para que una vez renderizado algo, no lo vuelva a llamar por el useEffect

const Small = React.memo(({ value }) => {
  console.log('Me volví a llamar :C');

  return (
    <small> { value } </small>
  )
});

export default Small;