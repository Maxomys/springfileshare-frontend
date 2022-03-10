import { Avatar, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, makeStyles, 
  Container, 
  CircularProgress,
  Card,
  Typography,
  Button} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useEffect, useState } from "react";
import DataService from "../services/DataService";
import FileService from "../services/FileService";
import LinksModal from "./LinksModal";
import AddIcon from '@material-ui/icons/Add';
import NewLinkModal from "./NewLinkModal";

const FileList = () => {

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [linksModalOpen, setLinksModalOpen] = useState(false);
  const [newLinkModalOpen, setNewLinkModalOpen] = useState(false);
  
  useEffect(() => {
    loadFiles();
  }, []);

  async function loadFiles() {
    setFiles(await DataService.getAllFiles());
    setLoading(false);
  }

  function handleOpenLinks() {
    setLinksModalOpen(true);
  }

  function handleCloseLinks() {
    setLinksModalOpen(false);
  }

  function handleOpenNewLink() {
    setNewLinkModalOpen(true);
  }

  function handleCloseNewLink() {
    setNewLinkModalOpen(false);
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
    },
    linkButton: {
      display: 'flex', 
      flexDirection: 'row',
      gap: '20px',
      justifyContent: 'center',
      margin: 'auto'
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
          <div className={classes.linkButton}>
            <Button
              onClick={handleOpenNewLink}
              variant='contained'
              color='primary'
              startIcon={<AddIcon/>}
            >
              New Link
            </Button>
            <Button onClick={handleOpenLinks} variant="contained">
              Links
            </Button>
            
            <LinksModal open={linksModalOpen} handleClose={handleCloseLinks} links={file.links}/>
            <NewLinkModal open={newLinkModalOpen} handleClose={handleCloseNewLink}/>
          </div>

          <div className={classes.cardLinks}>
            
          </div>
        </Card>
      )) : null}
    </Container>
  );

}

export default FileList;
