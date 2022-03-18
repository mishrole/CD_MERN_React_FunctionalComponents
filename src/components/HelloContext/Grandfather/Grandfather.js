import React from 'react';
import Father from '../Father/Father';

const Grandfather = (props) => {
  return (
    <>
    <div>Grandfather</div>
    <Father>
      {props.children}
    </Father>
    </>
  )
}

export default Grandfather