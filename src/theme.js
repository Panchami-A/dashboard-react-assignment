import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#ff4081",
      },
      background: {
        default: darkMode ? "#121212" : "#fff",
        paper: darkMode ? "#1d1d1d" : "#fff",
      },
      listItem: {
        selected: darkMode ? "#2c2c2c" : "#e0e0e0",
        hover: darkMode ? "#2c2c2c" : "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 14,
    },
  });
