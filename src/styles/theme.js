import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
  typography: {
    useNexVariants: true,
  },
  palette: {
    common: { black: "rgba(0, 0, 0, 1)", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(62, 53, 84, 1)",
      main: "rgba(35, 30, 48, 1)",
      dark: "rgba(13, 11, 18, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(253, 152, 110, 1)",
      main: "rgba(255, 121, 66, 1)",
      dark: "rgba(253, 88, 22, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
