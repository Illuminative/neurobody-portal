import React, { useState, useEffect, useCallback } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, GridList, GridListTile, TextField } from '@material-ui/core';
import { Header } from '../components/Header';
import ExerciseCard from '../components/ExerciseCard';
import TagToggle from '../components/TagToggle';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel';
import Workouts from '../screens/Workouts';

import axios from 'axios';
import { config } from '../firebaseConfig';

const ExerciseLibrary = props => {
	const classes = useStyles();

	const [exercises, setExercises] = useState(null);
	const [workouts, setWorkouts] = useState([]);
	const [filteredExercises, setFilteredExercises] = useState(null);
	const [tags, setTags] = useState(null);
	const [selectedTags, setSelectedTags] = useState([]);
	const [selectedWorkoutExercises, setSelectedWorkoutExercises] = useState([]);
	const [nameSearch, setNameSearch] = useState('');
	const [workoutName, setWorkoutName] = useState('');
	const [open, setOpen] = useState(false);
	const [tabValue, setTabValue] = useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setWorkoutName('');
		setOpen(false);
	};

	const handleTabChange = (event, newValue) => {
		setTabValue(newValue);
	};

	useEffect(() => {
		axios.get(`${config.databaseURL}/exercises.json`).then(res => {
			const fetchedExercises = [];

			for (let key in res.data) {
				fetchedExercises.push({
					...res.data[key],
					id: key
				});
			}

			setExercises(fetchedExercises);
			setFilteredExercises(fetchedExercises);
		});

		axios.get(`${config.databaseURL}/tags.json`).then(res => {
			let fetchedTags = {};
			for (let key in res.data) {
				fetchedTags[key] = res.data[key];
			}

			setTags(fetchedTags);
		});

		axios.get(`${config.databaseURL}/workouts.json`).then(res => {
			const fetchedWorkouts = [];
			for (let key in res.data) {
				fetchedWorkouts.push({
					...res.data[key],
					id: key
				});
			}

			setWorkouts(fetchedWorkouts);
		});
	}, []);

	const onSelectExerciseHandler = tag => {
		const queryParam = encodeURIComponent('tag');
		const tagQuery = encodeURIComponent(tag);
		props.history.push(process.env.PUBLIC_URL + `/exercise?${queryParam}=${tagQuery}`);
	};

	const onTagChangeHandler = (e, tag) => {
		const toggleState = e.target.checked;
		let tags = [...selectedTags];
		const tagSelected = tags.includes(tag);

		if (toggleState && !tagSelected) {
			tags.push(tag);
		} else if (!toggleState && tagSelected) {
			tags = tags.filter(t => t !== tag);
		}

		setSelectedTags(tags);
	};

	const onWorkoutSelectHandler = exercise => {
		const newWorkoutSelections = [...selectedWorkoutExercises, exercise];
		setSelectedWorkoutExercises(newWorkoutSelections);
	};

	const onWorkoutRemoveHandler = exerciseId => {
		const newWorkoutSelections = selectedWorkoutExercises.filter(
			workoutExercise => workoutExercise.id !== exerciseId
		);
		setSelectedWorkoutExercises(newWorkoutSelections);
	};

	const createWorkoutHandler = () => {
		if (workoutName.length > 0) {
			// get workout name and exercise ids of workout
			const workout = {
				name: workoutName,
				exercises: selectedWorkoutExercises.map(workoutExer => workoutExer.id)
			};

			// call to database to create workout
			axios
				.post(`${config.databaseURL}/workouts.json`, JSON.stringify(workout))
				.then(res => {
					workout.id = res.data.name;
					const newWorkouts = [...workouts, workout];
					setWorkouts(newWorkouts);

					setSelectedWorkoutExercises([]);
					handleClose();
					setTabValue(1);
				})
				.catch(err => {
					console.log(err);
					handleClose();
				});
		}
	};

	const searchExercises = useCallback(() => {
		if (!exercises) return;

		const exers = [...exercises];
		console.log(selectedTags);

		if (selectedTags.length <= 0 && nameSearch === '') {
			setFilteredExercises(exers);
			return;
		}

		const resultExercs = [];

		exers.forEach(ex => {
			let tagCount = 0;

			if (selectedTags.length > 0) {
				selectedTags.forEach(tag => {
					if (ex.tags && ex.tags.includes(tag)) {
						if (nameSearch === '') {
							tagCount++;
							ex.tagCount = tagCount;
						} else {
							if (ex.ExerciseName.includes(nameSearch)) {
								tagCount++;
								ex.tagCount = tagCount;
							}
						}
					}
				});

				if (tagCount > 0) {
					resultExercs.push(ex);
				}
			} else {
				if (ex.ExerciseName.toLowerCase().includes(nameSearch.toLowerCase())) {
					resultExercs.push(ex);
				}
			}
		});

		resultExercs.sort((a, b) => b.tagCount - a.tagCount);

		setFilteredExercises([...resultExercs]);
	}, [exercises, nameSearch, selectedTags]);

	const isWorkoutSelected = exerciseId => {
		return selectedWorkoutExercises.findIndex(workoutExer => workoutExer.id === exerciseId);
	};

	const tagCheck = tag => {
		return selectedTags.includes(tag);
	};

	const clearFilterHandler = () => {
		setSelectedTags([]);
		setNameSearch('');
	};

	const toAddExercise = () => {
		props.history.push(process.env.PUBLIC_URL + `/exercise`);
	};

	const searchChangeHandler = e => {
		const search = e.target.value;
		setNameSearch(search);
	};
	useEffect(() => {
		searchExercises();
	}, [selectedTags, nameSearch, searchExercises]);

	return (
		<>
			<Header
				title="Exercise Library"
				content={
					<Tabs value={tabValue} onChange={handleTabChange}>
						<Tab label="Exercises" value={0} />
						<Tab label="Workouts" value={1} />
					</Tabs>
				}
			/>
			<TabPanel value={tabValue} index={0}>
				<Grid container justify="center" className={classes.spacing}>
					<Grid item lg={10}>
						<Button onClick={toAddExercise}>Add Exercise</Button>
						<Button color="secondary" onClick={clearFilterHandler}>
							Clear Filters
						</Button>
						<TextField
							style={{ marginLeft: '20px' }}
							placeholder="Search By Name"
							value={nameSearch}
							onChange={searchChangeHandler}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.spacing}>
					{tags &&
						Object.keys(tags).map(group => (
							<Grid item lg={5} key={group}>
								<h3>{group}:</h3>

								{tags[group].map(tag => (
									<TagToggle
										tag={tag}
										onTagCheck={tagCheck}
										onTagChange={onTagChangeHandler}
										key={tag}
									/>
								))}
							</Grid>
						))}
				</Grid>
				{selectedWorkoutExercises.length > 0 && (
					<Grid container justify="center">
						<Grid item lg={10}>
							<Grid container>
								<Grid item>
									<h3>Workout Creation</h3>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								{selectedWorkoutExercises.map((workoutExercise, index) => {
									return (
										<Grid item key={workoutExercise.ExerciseName + index}>
											<div
												style={{
													border: '1px solid black',
													borderRadius: '15px',
													padding: '5px',
													cursor: 'not-allowed'
												}}
												onClick={() =>
													onWorkoutRemoveHandler(workoutExercise.id)
												}
											>
												<p>{workoutExercise.ExerciseName}</p>
											</div>
										</Grid>
									);
								})}
							</Grid>
							<Grid container spacing={5}>
								<Grid item>
									<Button onClick={handleClickOpen}>Create Workout</Button>
									<Button
										color="secondary"
										onClick={() => setSelectedWorkoutExercises([])}
									>
										Clear Workout
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				)}

				<Grid container justify="center" className={classes.spacing}>
					<Grid item lg={10}>
						{filteredExercises && (
							<GridList cellHeight={'auto'} spacing={20} cols={3}>
								{filteredExercises.map(exer => (
									<GridListTile key={exer.id} cols={1}>
										<ExerciseCard
											exercise={exer}
											onSelect={onSelectExerciseHandler}
											onWorkoutSelect={() => onWorkoutSelectHandler(exer)}
											onWorkoutRemove={() => onWorkoutRemoveHandler(exer.id)}
											workoutSelected={isWorkoutSelected(exer.id)}
										/>
									</GridListTile>
								))}
							</GridList>
						)}
					</Grid>
				</Grid>
			</TabPanel>
			<TabPanel value={tabValue} index={1}>
				<div className={classes.spacing}>
					<Workouts
						workouts={workouts}
						onWorkoutsChanged={newWorkouts => setWorkouts(newWorkouts)}
						exercises={exercises}
					/>
				</div>
			</TabPanel>

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Create Workout</DialogTitle>
				<DialogContent>
					<DialogContentText>Enter Workout name to create the workout.</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Workout Name"
						type="text"
						fullWidth
						value={workoutName}
						onChange={e => setWorkoutName(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						Cancel
					</Button>
					<Button onClick={createWorkoutHandler} color="primary">
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

const useStyles = makeStyles(theme => ({
	cardContainer: {
		width: '100%'
	},
	spacing: {
		marginTop: '25px'
	}
}));

export default ExerciseLibrary;
