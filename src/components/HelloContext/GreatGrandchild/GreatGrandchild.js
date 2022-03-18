import React from 'react';
import GreatGreatGrandchild from '../GreatGreatGrandchild/GreatGreatGrandchild';

const GreatGrandchild = (props) => {
  return (
    <div>
      GreatGrandchild
      <GreatGreatGrandchild />
    </div>
  )
}

export default GreatGrandchild