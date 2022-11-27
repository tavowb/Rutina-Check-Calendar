import { db } from "../firebase/config-firebase";
import { types } from "../types/types";
import { doc, setDoc } from "firebase/firestore";

export const crearRegistro = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.id;
    var dt = new Date();
    const datos = {
      ano: dt.getFullYear().toString(),
      mes: dt.getMonth().toString(),
      dia: dt.getDate().toString(),
    };

    // Add a new document in collection "cities"
    const referencia = await setDoc(
      doc(db, uid, datos.ano, datos.mes, datos.dia),
      {
        check: true,
        dia: datos.dia,
        mes: datos.mes,
      }
    );

    const newData = {
      ...datos,
      uid,
    };

    dispatch(crear(newData));
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

export const crear = (data) => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};

export const borrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.id;

    await db.doc(`${uid}/nominas/nomina/${id}`).delete();
    dispatch(borrar(id));
  };
};

export const borrar = (id) => {
  return {
    type: types.nominaDelete,
    payload: id,
  };
};

export const limpiar = () => {
  return {
    type: types.nominaClean,
  };
};
