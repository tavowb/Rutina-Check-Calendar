import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";

//Hooks para la pagina de registrar

const useRegister = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  //Esta funcion maneja los cambios en los inputs,
  //basicamente hace que cuando el usuario escriba algo en el input
  //ese valor sea almacenado en una variable, todo esto con el fin
  //de tener todos los datos correctos para el registro.
  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  //Esta funcion verifica las cosas basicas que debe tener una cuenta
  //para poder registrarse de forma correcta
  //en caso de de que cumpla con las condiciones registra la nueva cuenta.
  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, password, username));
  };

  return { handleChange, handleRegister, email, username, password, password2 };
};

export default useRegister;
