import React, { useState, useEffect } from "react";

import { ThemeProvider as MultiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import theme from "../styles/theme";
import { Header } from "../components/Header";

import LogoOrange from "../images/neuroOrangeLogo.png";

import axios from "axios";
import { config } from "../firebaseConfig";

import { loginValidation, errorTranslate } from "../helpers/validations";

const removeStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiry");
  localStorage.removeItem("userId");
};

const Auth = (props) => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const authCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const expiry = localStorage.getItem("tokenExpiry");
      if (expiry) {
        if (expiry > new Date().getMilliseconds()) {
          props.history.push("/exercises");
        } else {
          removeStorage();
        }
      }
    }
  };

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  const authenticateHandler = () => {
    setIsLoading(true);
    setError(null);
    const basicValidation = loginValidation(emailText, passwordText);

    if (basicValidation.valid) {
      const authData = {
        email: emailText,
        password: passwordText,
        returnSecureToken: true,
      };
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.apiKey}`,
          authData
        )
        .then((res) => {
          const data = res.data;
          axios
            .get(`${config.databaseURL}/users/${data.localId}.json`)
            .then((userRes) => {
              const userData = userRes.data;
              if (
                userData.roles &&
                userData.roles.find((user) => user === "admin")
              ) {
                localStorage.setItem("token", data.idToken);
                localStorage.setItem(
                  "tokenExpiry",
                  new Date().getMilliseconds() + data.expiresIn
                );
                localStorage.setItem("userId", data.localId);
                console.log("Success");
                props.history.push("/exercises");
              } else {
                setIsLoading(false);
                setError(
                  "The account you provided does not have the correct permissions."
                );
              }
            });
        })
        .catch((err) => {
          setIsLoading(false);
          setError(errorTranslate(err.response.data.error));
        });
    } else {
      setIsLoading(false);
      setError(basicValidation.message);
    }
  };

  const classes = useStyles();
  return (
    <MultiThemeProvider theme={theme}>
      <Header />
      <Grid className={classes.containerSpace} container justify='center'>
        <Grid item>
          <img src={LogoOrange} />
        </Grid>
        <Grid className={classes.containerSpace} container justify='center'>
          <Grid item xs={10} sm={8} lg={6}>
            <Card style={{ textAlign: "center" }}>
              <CardHeader title='Authentication' color='inherit' />
              <Grid container justify='center'>
                <Grid item md={6}>
                  <p className={classes.error}>{error}</p>
                </Grid>
              </Grid>
              <Grid container justify='center'>
                <Grid item md={6}>
                  <TextField
                    className={classes.inputField}
                    placeholder='Email Address'
                    autoFocus={true}
                    type='email'
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    size='medium'
                  />
                </Grid>
              </Grid>
              <Grid container justify='center'>
                <Grid item md={6}>
                  <TextField
                    className={classes.inputField}
                    placeholder='Password'
                    type='password'
                    value={passwordText}
                    onChange={(e) => setPasswordText(e.target.value)}
                    size='medium'
                  />
                </Grid>
              </Grid>
              <Grid
                className={classes.containerSpace}
                container
                justify='center'
              >
                <Grid item md={6}>
                  {isLoading ? (
                    <CircularProgress />
                  ) : (
                    <Button onClick={authenticateHandler}>Login</Button>
                  )}
                </Grid>
              </Grid>
              <CardContent></CardContent>
            </Card>
          </Grid>
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
  error: {
    color: "red",
  },
}));

export default Auth;
