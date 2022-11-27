import { db } from "../firebase/config-firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const loadData = async (uid) => {
  var dt = new Date();
  const datos = {
    ano: dt.getFullYear().toString(),
    mes: dt.getMonth().toString(),
    dia: dt.getDate().toString(),
  };
  const response = await db
    .collection(`${uid}/${datos.ano}/${datos.mes}/`)
    .get();
  const data = [];
  response.forEach((nomina) => {
    const nominaData = nomina.data();
    data.push({
      id: nomina.id,
      ...nominaData,
    });
  });

  return data;
};
