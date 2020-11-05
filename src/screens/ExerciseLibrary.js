import React, { useState, useEffect } from "react";

import { ThemeProvider as MultiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  TextField,
} from "@material-ui/core";
import theme from "../styles/theme";
import { Header } from "../components/Header";
import ExerciseCard from "../components/ExerciseCard";
import TagToggle from "../components/TagToggle";

import axios from "axios";
import { config } from "../firebaseConfig";

const ExerciseLibrary = (props) => {
  const [exercises, setExercises] = useState(null);
  const [filteredExercises, setFilteredExercises] = useState(null);
  const [tags, setTags] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    axios.get(`${config.databaseURL}/exercises.json`).then((res) => {
      const fetchedExercises = [];

      for (let key in res.data) {
        fetchedExercises.push({
          ...res.data[key],
          id: key,
        });
      }

      setExercises(fetchedExercises);
      setFilteredExercises(fetchedExercises);
    });

    axios.get(`${config.databaseURL}/tags.json`).then((res) => {
      let fetchedTags = {};
      for (let key in res.data) {
        fetchedTags[key] = res.data[key];
      }

      setTags(fetchedTags);
    });
  }, []);

  useEffect(() => {
    searchExercises();
  }, [selectedTags, nameSearch]);

  const onSelectExerciseHandler = (tag) => {
    const queryParam = encodeURIComponent("tag");
    const tagQuery = encodeURIComponent(tag);
    props.history.push(
      process.env.PUBLIC_URL + `/exercise?${queryParam}=${tagQuery}`
    );
  };

  const onTagChangeHandler = (e, tag) => {
    const toggleState = e.target.checked;
    let tags = [...selectedTags];
    const tagSelected = tags.includes(tag);

    if (toggleState && !tagSelected) {
      tags.push(tag);
    } else if (!toggleState && tagSelected) {
      tags = tags.filter((t) => t !== tag);
    }

    setSelectedTags(tags);
  };

  const searchExercises = () => {
    if (!exercises) return;

    const exers = [...exercises];
    console.log(selectedTags);

    if (selectedTags.length <= 0 && nameSearch === "") {
      setFilteredExercises(exers);
      return;
    }

    const resultExercs = [];

    exers.forEach((ex) => {
      let tagCount = 0;

      if (selectedTags.length > 0) {
        selectedTags.forEach((tag) => {
          if (ex.tags && ex.tags.includes(tag)) {
            if (nameSearch === "") {
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
        console.log(ex.ExerciseName);
        if (ex.ExerciseName.toLowerCase().includes(nameSearch.toLowerCase())) {
          resultExercs.push(ex);
        }
      }
    });

    console.log(resultExercs);

    resultExercs.sort((a, b) => b.tagCount - a.tagCount);

    setFilteredExercises([...resultExercs]);
  };

  const tagCheck = (tag) => {
    return selectedTags.includes(tag);
  };

  const clearFilterHandler = () => {
    setSelectedTags([]);
    setNameSearch("");
  };

  const toAddExercise = () => {
    props.history.push(process.env.PUBLIC_URL + `/exercise`);
  };

  const searchChangeHandler = (e) => {
    const search = e.target.value;
    setNameSearch(search);
  };

  return (
    <MultiThemeProvider theme={theme}>
      <Header title='Exercise Library' />
      <Grid container justify='center'>
        <Grid item lg={10}>
          <Button onClick={toAddExercise}>Add Exercise</Button>
          <Button onClick={clearFilterHandler}>Clear Filters</Button>
          <TextField
            style={{ marginLeft: "20px" }}
            placeholder='Search By Name'
            value={nameSearch}
            onChange={searchChangeHandler}
          />
        </Grid>
      </Grid>
      <Grid container justify='center'>
        {tags &&
          Object.keys(tags).map((group) => (
            <Grid item lg={5} key={group}>
              <h3>{group}:</h3>

              {tags[group].map((tag) => (
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
      <Grid container justify='center'>
        <Grid item lg={10}>
          {filteredExercises && (
            <GridList cellHeight={"auto"} spacing={20} cols={3}>
              {filteredExercises.map((exer) => (
                <GridListTile key={exer.id} cols={1}>
                  <ExerciseCard
                    exercise={exer}
                    onSelect={onSelectExerciseHandler}
                  />
                </GridListTile>
              ))}
            </GridList>
          )}
        </Grid>
      </Grid>
    </MultiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
  },
}));

export default ExerciseLibrary;
