import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const Authentication = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h4>Login With</h4>
      <Button
        onClick={handleGoogleSignIn}
        className="mb-2"
        variant="outline-primary"
      >
        <FaGoogle /> Log in with google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Log in with github
      </Button>
    </div>
  );
};

export default Authentication;
