import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

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
        window.location.href = "/";
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 1000);
      },
    ]);
  };

  return (
    <main className='wrapper'>
      <div>
        <button onClick={PianoLogout}>Salir</button>
      </div>
      <div id='my-account'></div>
    </main>
  )
}

export default Profile