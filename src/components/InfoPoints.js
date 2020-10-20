import React, { useState, useEffect } from "react";

import { ThemeProvider as MultiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

import { Grid, Button, TextField } from "@material-ui/core";

const InfoPoints = (props) => {
  const classes = useStyles();
  return (
    <MultiThemeProvider theme={theme}>
      <Grid container alignItems='center' className={classes.actionArea}>
        <Grid item className={classes.title}>
          <p>{props.title}</p>
        </Grid>
        <Grid item className={classes.button}>
          <Button onClick={() => props.onAdd(props.title)}>Add</Button>
        </Grid>
        <Grid item className={classes.button}>
          <Button onClick={() => props.onRemove(props.title)}>Remove</Button>
        </Grid>
      </Grid>
      <Grid container>
        {props.info.map((item, index) => {
          return (
            <Grid item xs={12} key={index}>
              <TextField
                value={item}
                onChange={props.onInfoChange.bind(this, props.title, index)}
                className={classes.input}
                placeholder='Enter info here'
              />
            </Grid>
          );
        })}
      </Grid>
    </MultiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "80%",
  },
  actionArea: {
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    padding: 5,
    borderRadius: 15,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    marginBottom: 3,
    width: "15%",
  },
  button: {
    marginLeft: 10,
  },
  input: {
    width: "100%",
  },
}));

export default InfoPoints;
