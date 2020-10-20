import React from "react";
import { ThemeProvider as MultiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Tooltip } from "@material-ui/core";
import theme from "../styles/theme";

export const Header = (props) => {
  const classes = useStyles();

  return (
    <MultiThemeProvider theme={theme}>
      <AppBar position='static'>
        <Toolbar>
          {props.title ? <h1>{props.title}</h1> : <h1>Neurobody</h1>}
        </Toolbar>
      </AppBar>
    </MultiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({}));
