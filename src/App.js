import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";
import { setDarkMode } from "./redux/app-slice";
import Sidebar from "./components/sidebar";
import Topbar from "./components/header";
import Dashboard from "./components/dashboard";
import Notification from "./components/notification";
import OrderList from "./components/order-list";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.dashboard.darkMode);
  const [currentView, setCurrentView] = useState("overview");

  useEffect(() => {
    const handleThemeChange = (e) => {
      dispatch(setDarkMode(e.matches));
    };

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    dispatch(setDarkMode(darkModeMediaQuery.matches));

    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [dispatch]);

  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar onViewChange={setCurrentView} />
        <main className={`content ${currentView === "overview" ? "overview-view" : ""}`}>
          <Topbar />
          {currentView === "overview" && <Dashboard />}
          {currentView === "projects" && <OrderList />}
          {currentView === "overview" && <Notification />}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
