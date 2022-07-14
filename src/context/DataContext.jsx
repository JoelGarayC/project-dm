//context-jsx


import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);

  return <DataContext.Provider value={{
    isLogged,
    setIsLogged,
  }}>
    {children}
  </DataContext.Provider>;
}


