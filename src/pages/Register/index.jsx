import React, { useEffect } from 'react'

const Register = () => {

  const PianoLogin = () => {
    console.log("register");
    //const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: false, // habilitar formulario registro
          displayMode: "inline", //inline
          screen: "register", // plantilla login - registro -
          containerSelector: "#register-form", // contenedor o div donde mostrara plantilla
        });
      },
    ]);
  };

  useEffect(() => {
    PianoLogin();
  }, [])

  return (
    <main>
      <div id='register-form'></div>
    </main>


  )
}

export default Register