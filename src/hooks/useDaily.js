import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearRegistro } from "../actions/nomina";
import useCalendar from "./useCalendar";
import useImageLinks from "./useImageLinks";

const useDaily = () => {
  //variables
  const dispatch = useDispatch();
  const { inter, medal, imgs1, imgs2, imgs3, imgs4 } = useImageLinks();
  let navigate = useNavigate();

  const [rutina, setRutina] = useState(false);
  const { numDay } = useCalendar();
  let { nomina } = useSelector((state) => state);

  //Funciones
  const rutinaCompleta = (i, nomina) => {
    let flag = false;
    if (nomina.data.length === 0) {
      return false;
    }

    nomina.data.map((nom) => {
      const x = Object.values(nom);
      flag = x[0] === i.toString();
      return flag;
    });

    return flag;
  };

  useEffect(() => {
    setRutina(rutinaCompleta(numDay, nomina));
    return () => {};
  }, [nomina, numDay]);

  const Bienvenido = () => {
    Swal.fire({
      title: "Bienvenido!",
      imageUrl: "https://media.tenor.com/tLs_ViApc7AAAAAC/shy-hi.gif",
    });
  };

  const handleYes = () => {
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
    dispatch,
    inter,
    medal,
    goCalendar,
    rutina,
  };
};

export default useDaily;
