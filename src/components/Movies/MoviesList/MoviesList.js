import React from 'react';

const MoviesList = ( { movies } ) => {
  const onClickHandler = (e, value) => {
    alert(value);
  }

  return movies.map((item, index) => {
    return <button key={index} onClick={(e) => onClickHandler(e, item)}>{item}</button>
  })
  
};

export default MoviesList;