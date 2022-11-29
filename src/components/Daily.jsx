import useDaily from "../hooks/useDaily";

const Daily = () => {
  const { handleNo, handleYes, inter, medal, goCalendar, rutina } = useDaily();

  return (
    <div className="container text-center">
      <h1>Daily Check </h1>
      <div className="d-flex justify-content-center">
        <div className="container " style={{ width: "20rem" }}>
          {!rutina ? (
            <div className="card-body">
              <img className="card-img-top" src={inter} alt="Simbolo" />
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
            <div className="card-body ">
              <img className="card-img-top" src={medal} alt="Simbolo" />
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
