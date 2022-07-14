
import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("")

  return <DataContext.Provider value={{
    isLogged,
    setIsLogged,
    setName,
    name
  }}>
    {children}
  </DataContext.Provider>;
}


