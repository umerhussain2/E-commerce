import { createTheme } from "@mui/material";
import { blueGrey, deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange.A400,
      light: deepOrange.A100,
      dark: deepOrange.A700,
      contrastText: "#fff",
    },

    background: {
      main: blueGrey[100],
      light: blueGrey[50],
      dark: blueGrey[200],
      contrastText: "#000",
    },
  },
});

export default theme;
