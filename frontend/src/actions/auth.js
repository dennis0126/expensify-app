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

// LOGIN_ANONYMOUS
export const loginAnonymous = () => ({
  type: "LOGIN_ANONYMOUS",
});

export const startLoginAnonymous = () => {
  return () => {
    return firebase.auth().signInAnonymously();
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
