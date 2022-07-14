import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const PianoLogin = () => {
    console.log("login");
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: false, // habilitar formulario registro
          displayMode: "inline", //inline
          screen: "login", // plantilla login - registro -
          containerSelector: "#login-form", // contenedor o div donde mostrara plantilla
          loggedIn: function (data) {
            // callback  inicia sesion
            console.log(
              "user ",
              data.user,
              " logged in with token",
              data.token
            );
            localStorage.setItem("name", data.user.given_name)
            navigate("/", { replace: true });
            // setTimeout(() => {
            //   window.location.reload();
            // }, 1000);
          },
          //Set the CSS and HTML here for what the signup button should look like when the user is logged in
          //e.g. unhide the signout button, hide the sign-in button

          loggedOut: function () {
            // callback cierra sesion
            console.log("el usuario ah salido!");
            localStorage.clear('name');
            //Set the CSS and HTML here for what the signup button should look like when the user is logged out //e.g. unhide the sign in button, hide the signout button
          },
        });
      },
    ]);
  };

  useEffect(() => {
    PianoLogin();
  }, [])

  return (

    <main className='wrapper'>
      <div id='login-form'></div>
    </main>
  )
}

export default Login