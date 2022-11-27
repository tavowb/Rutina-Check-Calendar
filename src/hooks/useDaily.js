import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearRegistro } from "../actions/nomina";
import useImageLinks from "./useImageLinks";

const useDaily = () => {
  const { numDay, inter, medal, imgs1, imgs2, imgs3, imgs4 } = useImageLinks();
  const { nomina } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("rutina:");
  console.log(nomina.data);

  const [rutina, setRutina] = useState(false);
  let navigate = useNavigate();

  const Bienvenido = () => {
    Swal.fire({
      title: "Bienvenido!",
      imageUrl: "https://media.tenor.com/tLs_ViApc7AAAAAC/shy-hi.gif",
    });
  };

  const handleYes = () => {
    setRutina(true);
    Swal.fire({
      title: "Deseas dejar registro de tu rutina diaria?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
      color: "#00000",
      imageUrl: imgs1,
    }).then((result) => {
      if (result.isConfirmed) {
        Check();
        Swal.fire({
          imageUrl: imgs2,
          title: "Guardado",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "No se dejo registro de tu rutina diaria.",
          imageUrl: imgs3,
        });
      }
    });
  };

  const handleNo = () => {
    setRutina(false);
    Swal.fire({
      imageUrl: imgs4,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      title: "Rutina sin completar",
      text: "Aún tienes tiempo para hacer tu rutina diaria!",
      confirmButtonText: "Ok",
    });
  };

  const Check = () => {
    dispatch(crearRegistro());
  };

  const goCalendar = () => {
    navigate("/calendar");
  };

  return {
    Check,
    handleNo,
    handleYes,
    Bienvenido,
    rutina,
    dispatch,
    inter,
    medal,
    goCalendar,
  };
};

export default useDaily;
