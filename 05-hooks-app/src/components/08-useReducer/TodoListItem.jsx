import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={ todo.id }>
      <p
          className={`${ todo.done && 'complete' }`} 
          onClick={ () => handleToggle( todo.id ) }
      >
        { i + 1 }. { todo.desc }
      </p>
      <button onClick={() => handleDelete( todo.id )} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default TodoListItem;