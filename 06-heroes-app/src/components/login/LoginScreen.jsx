import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {

  const lastPath = localStorage.getItem('lastPath') || '/';

  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {
    // history.push('/') // Redirecciona a una siguiente página
    const action = {
      name: 'Alejandro'
    };
    dispatch({
      type: types.login,
      payload: action
    });
    history.replace( lastPath ); // Remplaza la página actual
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={ handleLogin } className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;