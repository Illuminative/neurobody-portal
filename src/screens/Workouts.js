import React, { useState, useEffect, useCallback } from 'react';
import { Button, Grid, GridList, GridListTile } from '@material-ui/core';
import WorkoutCard from '../components/WorkoutCard';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { config } from '../firebaseConfig';

import axios from 'axios';

const Workouts = props => {
	const [workoutSelected, setWorkoutSelected] = useState(null);
	const [selectedViewWorkout, setSelectedViewWorkout] = useState(null);
	const [viewWorkoutExercises, setViewWorkoutExercises] = useState([]);
	const [deleteOpen, setDeleteOpen] = useState(false);

	const handleDeleteClose = () => {
		setDeleteOpen(false);
	};

	const handleOpenDelete = workoutId => {
		setWorkoutSelected(workoutId);
		setDeleteOpen(true);
	};

	const handleConfirmDelete = () => {
		axios
			.delete(`${config.databaseURL}/workouts/${workoutSelected}.json`)
			.then(res => {
				console.log('workout deleted');
				const newWorkouts = props.workouts.filter(
					workout => workout.id !== workoutSelected
				);

				props.onWorkoutsChanged(newWorkouts);
				setWorkoutSelected(null);
				handleDeleteClose();
			})
			.catch(err => {
				console.log(err);
				handleDeleteClose();
			});
	};

	const displayExercises = useCallback(() => {
		if (selectedViewWorkout) {
			const exercisesInWorkout = [];

			selectedViewWorkout.exercises.forEach(exer => {
				const foundExercise = props.exercises.find(e => e.id === exer);
				if (foundExercise) {
					exercisesInWorkout.push(foundExercise);
				}
			});

			setViewWorkoutExercises(exercisesInWorkout);
		}
	}, [selectedViewWorkout, props.exercises]);

	useEffect(() => {
		displayExercises();
	}, [selectedViewWorkout, displayExercises]);

	return (
		<>
			<Grid container justify="center">
				<Grid item lg={10}>
					<h1>Workouts</h1>
				</Grid>
				<Grid item lg={10}>
					<GridList cellHeight={'auto'} spacing={20} cols={3}>
						{props.workouts.map(workout => (
							<GridListTile key={workout.id} cols={1}>
								<WorkoutCard
									workout={workout}
									onDeleteWorkout={handleOpenDelete}
									onViewWorkout={workout => setSelectedViewWorkout(workout)}
								/>
							</GridListTile>
						))}
					</GridList>
				</Grid>
			</Grid>
			<Dialog
				open={deleteOpen}
				onClose={handleDeleteClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Delete Workout</DialogTitle>
				<DialogContent>
					<DialogContentText>Do you want to delete workout?.</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleConfirmDelete} color="secondary">
						Delete
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={selectedViewWorkout !== null}
				onClose={() => setSelectedViewWorkout(null)}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					{selectedViewWorkout ? selectedViewWorkout.name : ''}
				</DialogTitle>
				<DialogContent>
					<ol>
						{viewWorkoutExercises.map((workoutExer, index) => {
							return <li key={workoutExer.id + index}>{workoutExer.ExerciseName}</li>;
						})}
					</ol>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setSelectedViewWorkout(null)} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Workouts;
