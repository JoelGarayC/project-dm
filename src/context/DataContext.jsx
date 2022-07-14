//context-jsx


import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [nameUser, setNameUser] = useState('');

  return <DataContext.Provider value={{
    isLogged,
    setIsLogged,
    setNameUser,
    nameUser
  }}>
    {children}
  </DataContext.Provider>;
}


