import React from 'react';
import GreatGreatGreatGrandchild from '../GreatGreatGreatGrandchild/GreatGreatGreatGrandchild';

const GreatGreatGrandchild = (props) => {
  return (
    <div>
      GreatGreatGrandchild
      <GreatGreatGreatGrandchild />
    </div>
  )
}

export default GreatGreatGrandchild