import { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DataContext } from "./context/DataContext";
import AppRoutes from "./routes/AppRoutes";

function App() {

  const { isLogged, setIsLogged } = useContext(DataContext);


  console.log(isLogged)

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


  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
