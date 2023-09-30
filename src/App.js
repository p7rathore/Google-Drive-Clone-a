import React, { useState } from "react";
import Nav from "./Commponent/Nav";
import Sidebaar from "./Commponent/sidebaar";
import Data from "./Commponent/Data";
import Login from "./Commponent/Login";
import "./css/App.css";
import { auth } from "./Auth/firebase";
import { provider } from "./Auth/firebase";
function App() {
  const [user, setUser] = useState(null);

  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {user ? (
        <>
          <Nav photoURL={user.photoURL} />
          <div className="App">
            <Sidebaar />
            <Data />
          </div>
        </>
      ) : (
        <>
          <Login singIn={singIn} />
        </>
      )}
    </>
  );
}

export default App;
