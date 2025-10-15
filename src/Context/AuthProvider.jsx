import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileInfo = {
    createUser: createUser
  };
  return <AuthContext value={profileInfo}>
    {children}
    </AuthContext>;
};

export default AuthProvider;
