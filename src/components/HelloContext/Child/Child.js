import React from 'react';
import Grandchild from '../Grandchild/Grandchild';

const Child = () => {
  return (
    <div>
      Child
      <Grandchild />
    </div>
  )
}

export default Child