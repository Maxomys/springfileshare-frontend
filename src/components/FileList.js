import { Avatar, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, makeStyles, 
  Container, 
  CircularProgress,
  Card,
  Typography} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useEffect, useState } from "react";
import DataService from "../services/DataService";
import FileService from "../services/FileService";

const FileList = () => {

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadFiles();
  }, []);

  async function loadFiles() {
    setFiles(await DataService.getAllFiles());
    setLoading(false);
  }

  const useStyles = makeStyles({
    container: {
      display: 'flex',
      marginTop: '50px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      padding: '20px 10px 20px 10px',
      margin: '30px 0 10px',
      display: 'flex',
      flexDirection: 'column'
    },
    cardTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    cardLinks: {
      display: 'flex',
      flexDirection: 'column'
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column'
    }
  });

  const classes = useStyles();

  if (loading) {
    return (
      <Container className={classes.container} maxWidth='sm'>
        <CircularProgress color='secondary'/>
      </Container>
    )
  }

  return (
    <Container maxWidth='sm'>
      {files ? files.map(file => (
        <Card className={classes.card} key={file.id}>
          <div className={classes.cardTop}>
            <Avatar>
              <DescriptionIcon/>
            </Avatar>
            <Container className={classes.cardContainer}>
              <Typography variant='h6'>{file.originalFileName}</Typography>
              <Typography>{Math.round(file.size / 1048576)} MB</Typography>
            </Container>
            <IconButton onClick={() => FileService.download(file.id)}>
              <GetAppIcon/>
            </IconButton>
          </div>
          <div className={classes.cardLinks}>
            <List>
              {file.links.map(link => (
                <ListItem key={link.id}>
                  <ListItemText primary={link.url}></ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton>
                      <DeleteForeverIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Card>
      )) : null}
    </Container>
  );

}

export default FileList;
