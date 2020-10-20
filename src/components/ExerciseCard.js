import React from "react";

import { ThemeProvider as MultiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Button } from "@material-ui/core";
import theme from "../styles/theme";

const ExerciseCard = (props) => {
  const classes = useStyles();

  const onSelectHandler = () => {};

  return (
    <MultiThemeProvider theme={theme}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <h4>{props.exercise.id}</h4>
          <h3>{props.exercise.ExerciseName}</h3>
          <Button onClick={() => props.onSelect(props.exercise.id)}>
            Details
          </Button>
        </CardContent>
      </Card>
    </MultiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "80%",
    borderColor: theme.palette.primary,
    border: "1px solid",
    borderRadius: 20,
  },
}));

export default ExerciseCard;
