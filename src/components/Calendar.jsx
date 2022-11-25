import useCalendar from "../hooks/useCalendar";

const Calendar = () => {
  const { month, numMonth, Daystart, days, calend, modf } = useCalendar();
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
                  src={modf}
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
