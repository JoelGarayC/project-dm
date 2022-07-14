
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    (function (src) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = src;
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
    })("//sandbox.tinypass.com/xbuilder/experience/load?aid=PeVZORGJsu");

    setTimeout(() => {
      const tp = window.tp || [];
      tp.push(["setCookieDomain", "project-dm.vercel.app"]);
    }, 1000);
  }, []);


  return <DataContext.Provider value={{
    isLogged,
    setIsLogged,
  }}>
    {children}
  </DataContext.Provider>;
}


