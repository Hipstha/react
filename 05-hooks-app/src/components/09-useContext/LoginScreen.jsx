import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const data = {
    id: 1234,
    name: 'Alejandro'
  };
  
  return(
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary"
              onClick={() => setUser(data)}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;