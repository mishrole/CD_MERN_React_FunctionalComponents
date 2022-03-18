import React from 'react';
import GreatGrandchild from '../GreatGrandchild/GreatGrandchild';

const Grandchild = (props) => {
  return (
    <div>
      Grandchild
      <GreatGrandchild />
    </div>
  )
}

export default Grandchild