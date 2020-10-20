import React, { useState, useEffect } from "react";

import { ThemeProvider as MultiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  CircularProgress,
  GridList,
  GridListTile,
} from "@material-ui/core";

import theme from "../styles/theme";
import { Header } from "../components/Header";
import InfoPoints from "../components/InfoPoints";
import TagToggle from "../components/TagToggle";

import axios from "axios";
import { config } from "../firebaseConfig";

const ExerciseDetail = (props) => {
  const classes = useStyles();
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTag, setExerciseTag] = useState("");
  const [tags, setTags] = useState([]);
  const [tip1, setTip1] = useState([]);
  const [tip2, setTip2] = useState([]);
  const [tip3, setTip3] = useState([]);
  const [avoid, setAvoid] = useState([]);
  const [engagePrimary, setEngagePrimary] = useState([]);
  const [engageSecondary, setEngageSecondary] = useState([]);
  const [engageIsometric, setEngageIsometric] = useState([]);
  const [lessDifficult, setLessDifficult] = useState([]);
  const [moreDifficult, setMoreDifficult] = useState([]);

  const [newExercise, setNewExercise] = useState(false);

  const [filterTags, setFilterTags] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    let tag = "";
    for (let param of query.entries()) {
      if (param[0] === "tag") {
        tag = param[1];
      }
    }

    if (tag !== "") {
      axios.get(`${config.databaseURL}/exercises/${tag}.json`).then((res) => {
        console.log(res.data);
        setExerciseTag(tag);
        if (res.data.tags) setTags(res.data.tags);
        if (res.data.ExerciseName) setExerciseName(res.data.ExerciseName);
        if (res.data.tips.phase1) setTip1(res.data.tips.phase1);
        if (res.data.tips.phase2) setTip2(res.data.tips.phase2);
        if (res.data.tips.phase3) setTip3(res.data.tips.phase3);
        if (res.data.avoids) setAvoid(res.data.avoids);
        if (res.data.engages.primary)
          setEngagePrimary(res.data.engages.primary);
        if (res.data.engages.secondary)
          setEngageSecondary(res.data.engages.secondary);
        if (res.data.engages.isometric)
          setEngageIsometric(res.data.engages.isometric);

        if (res.data.variants) {
          if (res.data.variants.lessDifficult);
          setLessDifficult(res.data.variants.lessDifficult);
          if (res.data.variants.moreDifficult);
          setMoreDifficult(res.data.variants.moreDifficult);
        }

        setNewExercise(false);
      });
    } else {
      console.log("NO FOUND, CREATE ONE");
      setNewExercise(true);
    }

    axios.get(`${config.databaseURL}/tags.json`).then((res) => {
      let fetchedTags = {};
      for (let key in res.data) {
        fetchedTags[key] = res.data[key];
      }

      setFilterTags(fetchedTags);
    });
  }, []);

  const onInfoChangeHandler = (type, index, e) => {
    switch (type) {
      case "Tip(s) Phase 1":
        const tipList1 = [...tip1];
        tipList1[index] = e.target.value;
        setTip1(tipList1);
        break;
      case "Tip(s) Phase 2":
        const tipList2 = [...tip2];
        tipList2[index] = e.target.value;
        setTip2(tipList2);
        break;
      case "Tip(s) Phase 3":
        const tipList3 = [...tip3];
        tipList3[index] = e.target.value;
        setTip3(tipList3);
        break;
      case "Avoid Tip(s)":
        const avoidList = [...avoid];
        avoidList[index] = e.target.value;
        setAvoid(avoidList);
        break;
      case "Engage Muscle(s) Primary":
        const primeList = [...engagePrimary];
        primeList[index] = e.target.value;
        setEngagePrimary(primeList);
        break;
      case "Engage Muscle(s) Secondary":
        const secondList = [...engageSecondary];
        secondList[index] = e.target.value;
        setEngageSecondary(secondList);
        break;
      case "Engage Muscle(s) Isometric":
        const isoList = [...engageIsometric];
        isoList[index] = e.target.value;
        setEngageIsometric(isoList);
        break;
      case "Less Difficult Variant(s)":
        const less = [...lessDifficult];
        less[index] = e.target.value;
        setLessDifficult(less);
        break;
      case "More Difficult Variant(s)":
        const more = [...moreDifficult];
        more[index] = e.target.value;
        setMoreDifficult(more);
        break;
    }
  };

  const onExerciseNameChangeHandler = (e) => {
    setExerciseName(e.target.value);
  };

  const onExerciseTagChangeHandler = (e) => {
    setExerciseTag(e.target.value);
  };

  const onAddInfoHandler = (type) => {
    switch (type) {
      case "Tip(s) Phase 1":
        setTip1((prevstate) => [...prevstate, ""]);
        break;
      case "Tip(s) Phase 2":
        setTip2((prevstate) => [...prevstate, ""]);
        break;
      case "Tip(s) Phase 3":
        setTip3((prevstate) => [...prevstate, ""]);
        break;
      case "Avoid Tip(s)":
        setAvoid((prevstate) => [...prevstate, ""]);
        break;
      case "Engage Muscle(s) Primary":
        setEngagePrimary((prevstate) => [...prevstate, ""]);
        break;
      case "Engage Muscle(s) Secondary":
        setEngageSecondary((prevstate) => [...prevstate, ""]);
        break;
      case "Engage Muscle(s) Isometric":
        setEngageIsometric((prevstate) => [...prevstate, ""]);
        break;
      case "Less Difficult Variant(s)":
        setLessDifficult((prevstate) => [...prevstate, ""]);
        break;
      case "More Difficult Variant(s)":
        setMoreDifficult((prevstate) => [...prevstate, ""]);
        break;
    }
  };

  const onRemoveInfoHandler = (type) => {
    switch (type) {
      case "Tip(s) Phase 1":
        if (tip1.length > 0) {
          const tipList1 = [...tip1];
          tipList1.pop();
          setTip1(tipList1);
        }
        break;
      case "Tip(s) Phase 2":
        if (tip2.length > 0) {
          const tipList2 = [...tip2];
          tipList2.pop();
          setTip2(tipList2);
        }

        break;
      case "Tip(s) Phase 3":
        if (tip3.length > 0) {
          const tipList3 = [...tip3];
          tipList3.pop();
          setTip3(tipList3);
        }
        break;
      case "Avoid Tip(s)":
        if (avoid.length > 0) {
          const avoidList = [...avoid];
          avoidList.pop();
          setAvoid(avoidList);
        }
        break;
      case "Engage Muscle(s) Primary":
        if (engagePrimary.length > 0) {
          const engagePrime = [...engagePrimary];
          engagePrime.pop();
          setEngagePrimary(engagePrime);
        }
        break;
      case "Engage Muscle(s) Secondary":
        if (engageSecondary.length > 0) {
          const engageSecond = [...engageSecondary];
          engageSecond.pop();
          setEngageSecondary(engageSecond);
        }
        break;
      case "Engage Muscle(s) Isometric":
        if (engageIsometric.length > 0) {
          const engageIso = [...engageIsometric];
          engageIso.pop();
          setEngageIsometric(engageIso);
        }
        break;
      case "Less Difficult Variant(s)":
        if (lessDifficult.length > 0) {
          const less = [...lessDifficult];
          less.pop();
          setLessDifficult(less);
        }
        break;
      case "More Difficult Variant(s)":
        if (moreDifficult.length > 0) {
          const more = [...moreDifficult];
          more.pop();
          setMoreDifficult(more);
        }
        break;
    }
  };

  const onSaveExercisehandler = () => {
    const exercise = {
      ExerciseName: exerciseName,
      tags: tags,
      tips: {
        phase1: tip1,
        phase2: tip2,
        phase3: tip3,
      },
      avoids: avoid,
      engages: {
        primary: engagePrimary,
        secondary: engageSecondary,
        isometric: engageIsometric,
      },
      variants: {
        lessDifficult: lessDifficult,
        moreDifficult: moreDifficult,
      },
    };

    axios
      .put(`${config.databaseURL}/exercises/${exerciseTag}.json`, exercise)
      .then((res) => {
        console.log(res);
        props.history.push(process.env.PUBLIC_URL + "/exercises");
      });
  };

  const onDeleteExerciseHandler = () => {
    axios
      .delete(`${config.databaseURL}/exercises/${exerciseTag}.json`)
      .then((res) => {
        console.log(res);
        props.history.push(process.env.PUBLIC_URL + "/exercises");
      });
  };

  const tagCheck = (tag) => {
    return tags.includes(tag);
  };

  const onTagChangeHandler = (e, tag) => {
    const toggleState = e.target.checked;
    let newTags = [...tags];
    const tagSelected = newTags.includes(tag);

    if (toggleState && !tagSelected) {
      newTags.push(tag);
    } else if (!toggleState && tagSelected) {
      newTags = newTags.filter((t) => t !== tag);
    }

    console.log(newTags);

    setTags(newTags);
  };

  const toLibrary = () => {
    props.history.push(process.env.PUBLIC_URL + "/exercises");
  };

  return (
    <MultiThemeProvider theme={theme}>
      <Header title='Exercise Detail' />
      <Grid className={classes.containerSpace} container justify='center'>
        <Grid item xs={10}>
          <Card>
            <CardContent>
              <Grid
                className={classes.containerSpace}
                container
                justify='center'
              >
                <Grid item className={classes.actionButton}>
                  <Button onClick={toLibrary}>Back To Library</Button>
                </Grid>
                <Grid item className={classes.actionButton}>
                  <Button onClick={() => onSaveExercisehandler()}>
                    {newExercise ? "Create Exercise" : "Update Exercise"}
                  </Button>
                </Grid>
                {!newExercise && (
                  <Grid item className={classes.actionButton}>
                    <Button onClick={() => onDeleteExerciseHandler()}>
                      Delete Exercise
                    </Button>
                  </Grid>
                )}
              </Grid>

              <Grid
                className={classes.containerSpace}
                container
                justify='center'
              >
                <Grid container justify='center'>
                  <Grid item xs={4}>
                    <TextField
                      placeholder='Exercise Tag'
                      value={exerciseTag}
                      onChange={onExerciseTagChangeHandler}
                      disabled={!newExercise}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      placeholder='Exercise Name'
                      value={exerciseName}
                      onChange={onExerciseNameChangeHandler}
                    />
                  </Grid>
                </Grid>
                <Grid
                  className={classes.containerSpace}
                  container
                  justify='center'
                >
                  {filterTags &&
                    Object.keys(filterTags).map((group) => (
                      <Grid item lg={12} key={group}>
                        <h3>{group}:</h3>

                        {filterTags[group].map((tag) => (
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

                <InfoPoints
                  title='Tip(s) Phase 1'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={tip1}
                />

                <InfoPoints
                  title='Tip(s) Phase 2'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={tip2}
                />

                <InfoPoints
                  title='Tip(s) Phase 3'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={tip3}
                />

                <InfoPoints
                  title='Avoid Tip(s)'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={avoid}
                />

                <InfoPoints
                  title='Engage Muscle(s) Primary'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={engagePrimary}
                />

                <InfoPoints
                  title='Engage Muscle(s) Secondary'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={engageSecondary}
                />

                <InfoPoints
                  title='Engage Muscle(s) Isometric'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={engageIsometric}
                />

                <InfoPoints
                  title='Less Difficult Variant(s)'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={lessDifficult}
                />

                <InfoPoints
                  title='More Difficult Variant(s)'
                  onAdd={onAddInfoHandler}
                  onRemove={onRemoveInfoHandler}
                  onInfoChange={onInfoChangeHandler}
                  info={moreDifficult}
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MultiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  containerSpace: {
    marginTop: 20,
  },
  inputField: {
    width: "80%",
    marginTop: 20,
  },
  actionButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  error: {
    color: "red",
  },
}));

export default ExerciseDetail;
