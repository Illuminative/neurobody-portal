import React, { useState } from 'react';

import { ThemeProvider as MultiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button } from '@material-ui/core';
import theme from '../styles/theme';

const ExerciseCard = props => {
	const classes = useStyles();

	const selected = props.workoutSelected > -1;

	const onSelectHandler = () => {
		if (selected) {
			props.onWorkoutRemove();
		} else {
			props.onWorkoutSelect();
		}
		// add or remove from workout
	};

	return (
		<MultiThemeProvider theme={theme}>
			<Card
				className={classes.cardContainer}
				style={{ backgroundColor: selected ? 'yellow' : 'white' }}
			>
				<CardContent>
					<h4>{props.exercise.id}</h4>
					<h3>{props.exercise.ExerciseName}</h3>
					{selected && <h5>Workout Exercise #{props.workoutSelected + 1}</h5>}
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => props.onSelect(props.exercise.id)}
						>
							Details
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => onSelectHandler()}
						>
							{selected ? 'Remove From Workout' : 'Add To Workout'}
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

export default ExerciseCard;
