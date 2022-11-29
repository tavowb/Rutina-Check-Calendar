import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import React, {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { login } from "../actions/auth";
import { leerRegistros } from "../actions/nomina";
import { firebase } from "../firebase/config-firebase";
import { loadData } from "../helpers/loadData";

import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AuthRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        //login
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
        setLog(true);

        //cargar datos de la db
        const CalendarData = await loadData(user.uid);
        dispatch(leerRegistros(CalendarData));
        //
      } else {
        setLog(false);
      }
    });

    return () => {};
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter log={log}>
              <LoginScreen />
            </PublicRouter>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouter log={log}>
              <RegisterScreen />
            </PublicRouter>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRouter log={log}>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
