import { Button, Container, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import DataService from "../services/DataService";

const Register = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  });

  let history = useHistory();

  const onRegister = function() {
    DataService.registerNewUser(user);
    history.push("/");
  }

  const useStyles = makeStyles(() => ({
    container: {
      marginTop: '50px'
    }
  }));

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='sm'>
      <form>
      <Typography component="h1" variant="h5">
          Register
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Login"
        autoFocus
        value={user.username}
        onChange={event => setUser(prevUser => ({...prevUser, username: event.target.value}))}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Password"
        autoComplete="current-password"
        value={user.passowrd}
        onChange={event => setUser(prevUser => ({...prevUser, password: event.target.value}))}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="E-mail"
        id="email"
        autoComplete="email adress"
        value={user.email}
        onChange={event => setUser(prevUser => ({...prevUser, email: event.target.value}))}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={onRegister}
      >
        Register
      </Button>
      </form>
    </Container>
  );
}

export default Register;
