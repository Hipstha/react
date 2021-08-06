// libraries
import React, { useEffect, useState } from 'react';

// components
import Message from './Message';

// style
import './effects.css';

const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  /* Cada que sucede un cambio se dispara el objeto
   * Por ello hay que especificar cuando queremos que cambie
     Trabaja en base a la posición
     No se pueden usar hooks de forma condicional, siempre deben estar lo más arriba posible
   */
  useEffect( () => {
    return () => {

    }
  }, [] );

  useEffect( () => {
    // console.log('formState cambio');
  }, [formState] );

  useEffect( () => {
    // console.log('Email cambio');
  }, [email] );

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input type="text" 
               name="name"
               className="form-control"
               placeholder="Tu nombre"
               autoComplete="off"
               value={ name }
               onChange={ handleInputChange }
        />
      </div>

      <br />

      <div className="form-group">
        <input type="text" 
               name="email"
               className="form-control"
               placeholder="email@email.com"
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message /> }

    </>
  );
};

export default SimpleForm;