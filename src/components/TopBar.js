import { AppBar, Toolbar, Button, Typography, makeStyles, ButtonGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TokenService from '../services/TokenService';

const TopBar = () => {

  const [username, setUsername] = useState('Not logged in');

  useEffect(() => {
    setUsername(TokenService.getUsername);
  }, []);

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
        <Typography variant='h5'>{username}</Typography>
        <ButtonGroup variant='contained' color='default'>
          <Button component={Link} to='/register'>Register</Button>
          <Button component={Link} to='/login'>Login</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );  
};

export default TopBar;
