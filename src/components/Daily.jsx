import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { crearRegistro } from "../actions/nomina";

const inter =
  "https://cdn0.iconfinder.com/data/icons/pinpoint-notifocation/48/question-fill-512.png";

const medal =
  "https://cdn4.iconfinder.com/data/icons/medals-6/64/medal-champion-award-winner-olympic_games-sign-sports-competition_29-512.png";

const Daily = () => {
  const dispatch = useDispatch();
  const [rutina, setRutina] = useState(false);
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
      imageUrl: "https://media.tenor.com/vqapSoRo9NkAAAAd/chainsaw-man-csm.gif",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          imageUrl: "https://media.tenor.com/7VgtgX2qDEMAAAAC/anime-hoodie.gif",
          title: "Guardado",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "No se dejo registro de tu rutina diaria.",
          imageUrl:
            "https://img1.ak.crunchyroll.com/i/spire4/7f85caafc9e8e1a8acf7a483046fdecf1533783170_large.png",
        });
      }
    });
  };

  const handleNo = () => {
    setRutina(false);
    Swal.fire({
      imageUrl: "https://media.tenor.com/Ses1D76iE5UAAAAC/chainsaw-man-csm.gif",
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
          <div className="card-body">
            <h5 className="card-title">
              Ya relizaste tu rutina de aim diaria?
            </h5>
            <div className="row pt-2 pb-2">
              <div className="col">
                <button
                  type="button"
                  onClick={Check}
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
        </div>
      </div>
    </div>
  );
};

export default Daily;
