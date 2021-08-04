import React, { useState } from 'react';
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

  // const categories = ['One punch', 'Samurai X' , 'Dragon Ball'];
  const [ categories, setCategories ] = useState( defaultCategories );

  // const handleAdd = () => {
  //   // setCategories([
  //   //   ...categories,
  //   //   'malcolm'
  //   // ]);
  //   setCategories( cats => [ ...cats, 'Malcolm'] );
  // };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={ setCategories } />

      <hr />

      {/* <button onClick={ handleAdd }> Agregar </button> */}

      <ol>
        {
          categories.map( category => (
            <GifGrid key={ category }
                     category={ category } /> 
          ))
        }
      </ol>

    </>
  )
}

export default GifExpertApp; 
