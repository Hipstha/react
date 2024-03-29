import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGrifItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      { loading && <p className="animate__animated animate__flash">Cargando...</p> }
      <div className="card-grid">

          {
            images.map( img => (
              <GifGrifItem key={img.id} 
                          { ...img }
              />
            ))
          }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
