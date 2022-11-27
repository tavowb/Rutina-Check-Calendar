import React from "react";
import useImageLinks from "./useImageLinks";

const useCalendar = () => {
  const { no, error, check, calend, modf, inter, medal } = useImageLinks();
  //variables
  const nameDays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const days = [];
  let Daystart = 0;
  var dt = new Date();
  const numMonth = dt.getMonth();
  const numOnweek = dt.getDay();
  const numDay = dt.getDate();

  //funciones
  const contruir = (n) => {
    for (let index = 1; index <= n; index++) {
      days.push(index);
    }
  };

  const num = () => {
    if ((numMonth + 1) % 2 === 0) {
      return 31;
    } else {
      if (numMonth + 1 === 1) {
        return 28;
      } else {
        return 30;
      }
    }
  };

  const dayI = (n, nw) => {
    let resta = 0;
    if (n >= 7) {
      const div7 = n / 7;
      if (div7 >= 4) {
        resta = n - 28;
        resta = nw - resta;
        return resta;
      }
      if (div7 >= 3) {
        resta = n - 21;
        resta = nw - resta;
        return resta;
      }
      if (div7 >= 2) {
        resta = n - 14;
        resta = nw - resta;
        return resta;
      }
      if (div7 >= 1) {
        resta = n - 7;
        resta = nw - resta;
        return resta;
      }
    } else {
      resta = nw - n;
      return resta;
    }
  };

  const numDays = num();
  contruir(numDays);
  Daystart = dayI(numDay, numOnweek);

  return {
    month,
    numMonth,
    nameDays,
    Daystart,
    numDay,
    numMonth,
    numOnweek,
    days,
    calend,
    modf,
    error,
    no,
    inter,
    medal,
  };
};

export default useCalendar;
