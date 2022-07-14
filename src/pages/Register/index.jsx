import React, { useEffect } from 'react'

const Register = () => {

  const PianoLogin = () => {
    console.log("login");
    //const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: false, // habilitar formulario registro
          displayMode: "modal", //inline
          screen: "register", // plantilla login - registro -
          containerSelector: "#register-form", // contenedor o div donde mostrara plantilla
        });
      },
    ]);
  };

  PianoLogin();

  return (
    <main>

    </main>


  )
}

export default Register