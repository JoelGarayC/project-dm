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
  return (
    <main>
      <p>mi perfil</p>
      <div id='my-account'></div>
    </main>
  )
}

export default Profile