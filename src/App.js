import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./screens/Auth";
import ExerciseDetail from "./screens/ExerciseDetail";
import ExerciseLibrary from "./screens/ExerciseLibrary";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Auth} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/exercises"}
          component={ExerciseLibrary}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/exercise"}
          component={ExerciseDetail}
        />
      </Switch>
    </Router>
  );
};

export default App;
