import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContext';
import styles from './header.module.css'

const Header = () => {

  const { isLogged, setNameUser, nameUser } = useContext(DataContext);

  const PianoLogin = () => {
    console.log("login");
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: false, // habilitar formulario registro
          displayMode: "modal", //inline
          screen: "register", // plantilla login - registro -
          containerSelector: "#login-form", // contenedor o div donde mostrara plantilla
          loggedIn: function (data) {
            // callback  inicia sesion
            console.log(
              "user ",
              data.user,
              " logged in with token",
              data.token
            );
            setNameUser(data.user.given_name);
            window.location.reload();
          },
          //Set the CSS and HTML here for what the signup button should look like when the user is logged in
          //e.g. unhide the signout button, hide the sign-in button

          loggedOut: function () {
            // callback cierra sesion
            console.log("el usuario ah salido!");
            //Set the CSS and HTML here for what the signup button should look like when the user is logged out //e.g. unhide the sign in button, hide the signout button
          },
        });
      },
    ]);
  };
  return (
    <header>
      <div className={`wrapper ${styles.header}`}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img src='/logo.png' alt='logo' />
          </Link>
        </div>
        <nav className={styles.header__nav}>
          {
            isLogged ? (
                <Link to="/profile">{nameUser}</Link>
              ) : (
                <button onClick={PianoLogin}>INICIA SESIÓN</button>
              ) 
          }
        </nav>
      </div>
    </header>
  )
}

export default Header