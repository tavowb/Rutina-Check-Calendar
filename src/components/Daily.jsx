import useDaily from "../hooks/useDaily";

const Daily = () => {
  const { handleNo, handleYes, Bienvenido, rutina, inter, medal, goCalendar } =
    useDaily();

  return (
    <div className="container text-center">
      <h1>Daily Check </h1>
      <div className="d-flex justify-content-center">
        <div className="container " style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={!rutina ? inter : medal}
            alt="Card imge cap"
          />
          {!rutina ? (
            <div className="card-body">
              <h5 className="card-title">
                Ya relizaste tu rutina de aim diaria?
              </h5>
              <div className="row pt-2 pb-2">
                <div className="col">
                  <button
                    type="button"
                    onClick={handleYes}
                    className="btn btn-success"
                  >
                    Si
                  </button>
                </div>
                <div className="col ">
                  <button
                    type="button"
                    onClick={handleNo}
                    className="btn btn-danger"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="col ">
              <h5 className="card-title">
                Felicitaciones por cumplir con tu rutina el día de hoy!
              </h5>
              <button
                type="button"
                onClick={goCalendar}
                className="btn btn-primary mt-2"
              >
                Mirar el Calendario
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Daily;
