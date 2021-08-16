import React from 'react';

import { ThemeProvider as MultiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button } from '@material-ui/core';
import theme from '../styles/theme';

const WorkoutCard = props => {
	const classes = useStyles();

	return (
		<MultiThemeProvider theme={theme}>
			<Card className={classes.cardContainer}>
				<CardContent>
					<h2>{props.workout.name}</h2>
					<h3>{props.workout.exercises.length} Exercises</h3>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => props.onViewWorkout(props.workout)}
						>
							View Workout
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => props.onDeleteWorkout(props.workout.id)}
						>
							Delete Workout
						</Button>
					</div>
				</CardContent>
			</Card>
		</MultiThemeProvider>
	);
};

const useStyles = makeStyles(theme => ({
	cardContainer: {
		width: '80%',
		borderColor: theme.palette.primary,
		border: '1px solid',
		borderRadius: 20
	}
}));

export default WorkoutCard;
