import React from 'react';

const Input = ({ filter, setFilter }) => {
  return (
    <input value = { filter } onChange = { e => setFilter(e.target.value) }/>
  )
}

export default Input;