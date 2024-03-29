import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );

  const [ values, handleInputChange ] = useForm({
    searchText: q
  });
  
  
  const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ] );
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    history.push(`?q=${ values.searchText }`)
  };
  // const heroesFiltered = getHeroesByName( values.searchText );

  return (
    <div>
      <h1> Search Screen </h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={ handleSubmit }>
            <input type="text" 
                   placeholder="Find your hero"
                   className="form-control"
                   name="searchText"
                   autoComplete="off"
                   value={values.searchText}
                   onChange={ handleInputChange }
            />

            <button type="submit"
                    className="btn btn-block m-1 btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">

          <h4>Resultados</h4>
          <hr />

          {
            (q==='') && <div className="alert alert-info">
              search a hero
            </div>
          }

          {
            (q!=='' && heroesFiltered.length === 0) && <div className="alert alert-danger">
              There is no a hero with <strong>{ q }</strong>
            </div>
          }

          {
            heroesFiltered.map( hero => (
              <HeroCard key={ hero.id }
                        { ...hero }
              />
            ))
          }

        </div>

      </div>

    </div>
  )
};

export default SearchScreen;