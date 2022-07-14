import React, { useEffect } from 'react'

const Profile = () => {

  useEffect(() => {
    tp = window["tp"] || [];
    tp.push(["init", function() {
      tp.myaccount.show({
          displayMode: "inline",
          containerSelector: "#my-account"
      });
    }]);
  },[])

  const PianoLogout = () => {
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        console.log("logout");
        window.tp.pianoId.logout();
        window.location.reload();
        window.location.href = "/";
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