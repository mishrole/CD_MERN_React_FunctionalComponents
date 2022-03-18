import { createContext, useState } from 'react';

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [val, setVal] = useState(1);

  return (
    <MainContext.Provider value={{val, setVal}}>
      { children }
    </MainContext.Provider>
  )
}

export default MainContext;

export { MainContextProvider };