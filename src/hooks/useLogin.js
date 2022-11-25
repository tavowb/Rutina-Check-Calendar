import { useDispatch } from "react-redux";
import { emailAndPLogin, googlelogin } from "../actions/auth";
import { useState } from "react";

const useLogin = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  //Registro los cambios en mis inputs del login
  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  //Maneja el log con el botton de Google
  const handleGoogleLogin = () => {
    dispatch(googlelogin());
  };

  //Revisa que lo escrito sea un email
  //en caso de cumplir inicia sesion con el email registrado
  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPLogin(email, password));
  };

  return { handleChange, handleEmailLogin, handleGoogleLogin, email, password };
};

export default useLogin;
