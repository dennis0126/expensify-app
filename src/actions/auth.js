import { firebase, GoogleAuthProvider } from "../firebase/firebase";

// LOGIN
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(GoogleAuthProvider);
  };
};

// LOGOUT
export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
