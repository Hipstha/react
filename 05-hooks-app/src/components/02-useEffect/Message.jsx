import React, { useEffect, useState } from 'react';

const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  // de esta forma se pueden desmontar los effects
  // de no desmontarlos, se quedarán ejecutandose hasta que se reinicie la app
  // gasta mucha memoria
  
  useEffect(() => {
    const mouseMove = (e) => {
      // console.log( coors );
      // console.log(':)');
      const coords = { x: e.x, y: e.y };
      setCoords( coords );
    }
    window.addEventListener( 'mousemove', mouseMove );
    return () => {
      console.log('COmponente demontado');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <div>
      <h3>eres genial!</h3>
      <hr />
      <p>
        x: { x } y: { y }
      </p>
    </div>
  );
};

export default Message;