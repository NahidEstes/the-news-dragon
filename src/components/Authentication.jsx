// import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentication = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //   const [user, setUser] = useState(null);

  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        toast("successfully log in...");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("sign with github...");
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
      <Button onClick={handleGitHubSignIn} variant="outline-secondary">
        <FaGithub /> Log in with github
      </Button>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default Authentication;
