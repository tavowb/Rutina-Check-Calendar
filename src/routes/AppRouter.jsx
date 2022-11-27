import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppScreen from "../pages/AppScreen";
import CalendarScreen from "../pages/CalendarScreen";
import MonthsScreen from "../pages/MonthsScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route end path="/app" element={<AppScreen />} />
        <Route end path="/daily" element={<AppScreen />} />
        <Route end path="/month" element={<CalendarScreen />} />
        <Route end path="/calendar" element={<MonthsScreen />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
