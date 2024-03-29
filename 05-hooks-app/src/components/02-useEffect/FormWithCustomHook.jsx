// libraries
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

// style
import './effects.css';

const FormWithCustomHook = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues; 

  useEffect(() => {
    console.log('Email cambio');
  }, [ email ]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( formValues );
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1>
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

      <br />

      <div className="form-group">
        <input type="password" 
               name="password"
               className="form-control"
               placeholder="***********"
               value={ password }
               onChange={ handleInputChange }
        />
      </div>

      <br />

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>

    </form>
  );
};

export default FormWithCustomHook;