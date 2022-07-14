import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import styles from './profile.module.css'

const Profile = () => {

  const navigate = useNavigate();
  const { setIsLogged } = useContext(DataContext)

  useEffect(() => {
    tp = window["tp"] || [];
    tp.push(["init", function () {
      tp.myaccount.show({
        displayMode: "inline",
        containerSelector: "#my-account"
      });
    }]);
  }, [])

  const PianoLogout = () => {
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        console.log("logout");
        window.tp.pianoId.logout();
        localStorage.clear('name');
        setIsLogged(false)
    
        navigate('/', { replace: true })
   
      },
    ]);
  };

  return (
    <main className={`wrapper ${styles.profile}`}>
      <div>
        <a onClick={PianoLogout}>Salir</a>
      </div>
      <div id='my-account'></div>
    </main>
  )
}

export default Profile