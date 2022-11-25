import React from "react";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [];
let Daystart = 0;
var dt = new Date();
const numMonth = dt.getMonth();
const numOnweek = dt.getDay();
const numDay = dt.getDate();
const no =
  "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
const error =
  "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678075-sign-ban-512.png";
const check =
  "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png";

const calend =
  "https://cdn4.iconfinder.com/data/icons/essentials-72/24/011_-_Calendar-512.png";
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

const Calendar = () => {
  return (
    <div className="text-center">
      <h1> {month[numMonth]} </h1>
      <ol>
        <li className="li-titulo">Lunes </li>
        <li className="li-titulo">Martes</li>
        <li className="li-titulo">Miercoles</li>
        <li className="li-titulo">Jueves</li>
        <li className="li-titulo">Viernes</li>
        <li className="li-titulo">Sabado</li>
        <li className="li-titulo">Domingo</li>

        {days.map((i) => {
          return i === 1 ? (
            <li
              key={i}
              className="first-day"
              style={{
                gridColumnStart: `${Daystart + 1}`,
              }}
            >
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="https://i.imgur.com/Tz2i08s.png"
                  alt="Responsive"
                />
                <div className="card-body">
                  <h5 className="card-title">{i}</h5>
                </div>
              </div>
            </li>
          ) : (
            <li key={i}>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={calend}
                  alt="Responsive"
                />
                <div className="card-body">
                  <h5 className="card-title">{i}</h5>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Calendar;
