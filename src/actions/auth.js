import { firebase, googleAuthProvider } from "../firebase/config-firebase";
import { types } from "../types/types";

export const googlelogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then();
  };
};

export const emailAndPLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.id, user.displayName, user.email, user.photoURL));
      });
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });

        dispatch(login(user.id, user.displayName, user.email, user.photoURL));
      });
  };
};

export const login = (id, username, email, photoURL) => {
  return {
    type: types.login,
    payload: {
      id,
      username,
      email,
      photoURL,
    },
  };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: types.logout,
    });
  };
};
