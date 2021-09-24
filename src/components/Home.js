import TopBar from './TopBar';
import FileList from './FileList';
import { Button, Container, makeStyles } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Home = () => {


  const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    uploadButton: {
      marginTop: '50px',
      marginBottom: '150px'
    }
  });

  const classes = useStyles();

  return (
    <div>
      <TopBar/>
      <Container className={classes.container}>
        <FileList/>
        <Button className={classes.uploadButton} variant="contained" color="primary" size='large' startIcon={<CloudUpload/>} component={Link} to='/fileUpload'>
          File Upload
        </Button>
      </Container>
    </div>
  );
};

export default Home;
