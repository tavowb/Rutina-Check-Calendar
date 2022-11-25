import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

export const crearRegistro = ({ pago, horas }) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.id;
    const calculo = pago * horas;
    const datos = {
      fecha: new Date().toLocaleDateString(),
      pago: calculo,
    };

    const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);
    const id = await referencia.id;

    const newData = {
      ...datos,
      id,
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
