import useCalendar from "../hooks/useCalendar";

const Calendar = () => {
  //variables
  const { month, numMonth, Daystart, days, modf, nameDays, validator } =
    useCalendar();
  return (
    <div className="text-center">
      <h1> {month[numMonth]} </h1>
      <ol>
        {nameDays.map((name) => {
          return (
            <li key={name} className="li-titulo">
              {name}
            </li>
          );
        })}

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
                  src={validator(i)}
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
