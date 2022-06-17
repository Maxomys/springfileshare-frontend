import { AppBar, Toolbar, Button, Typography, makeStyles, ButtonGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthService from '../services/AuthService';
import TokenService from '../services/TokenService';

const TopBar = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(TokenService.getUsername);
  }, []);

  function logout() {
    AuthService.logout();
    window.location.reload();
  }

  const useStyles = makeStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  });

  const classes = useStyles();

  return (
    <AppBar position='static' mb={2}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h4'>All files</Typography>
        <Typography variant='h5'>{username ? username : 'Not Logged In'}</Typography>
        {username ? 
          <ButtonGroup variant='contained' color='default'>
            <Button onClick={logout}>Log out</Button>
          </ButtonGroup>
        : <ButtonGroup variant='contained' color='default'>
            <Button component={Link} to='/register'>Register</Button>
            <Button component={Link} to='/login'>Login</Button>
          </ButtonGroup>
        }
      </Toolbar>
    </AppBar>
  );  
};

export default TopBar;
