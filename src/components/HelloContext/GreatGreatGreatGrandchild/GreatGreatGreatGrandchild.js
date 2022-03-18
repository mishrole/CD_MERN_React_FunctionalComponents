import React, { useContext } from 'react';
import MainContext from './../../../context/MainContext';

const GreatGreatGreatGrandchild = (props) => {
  const context = useContext(MainContext);

  return (
    <div>
      GreatGreatGreatGrandchild
      <p>Hello {context} from GreatGreatGreatGrandchild</p>
    </div>
  )
}

export default GreatGreatGreatGrandchild