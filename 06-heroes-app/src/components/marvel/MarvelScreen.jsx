import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel screen</h1>
      <hr />

      <HeroList publisher={'Marvel Comics'} />

    </div>
  );
};

export default MarvelScreen;