import React, { useContext, useEffect } from 'react';
import MainContext from './../../../context/MainContext';

const GreatGreatGreatGrandchild = (props) => {
  const context = useContext(MainContext);

  useEffect(() => {
    context.setVal("Context setVal");
  }, [context])

  return (
    <div>
      GreatGreatGreatGrandchild
      <p>Hello {context.val} from GreatGreatGreatGrandchild</p>
    </div>
  )
}

export default GreatGreatGreatGrandchild