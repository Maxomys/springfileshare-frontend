import { Button, Container, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { FolderOpen, Publish } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import FileService from "../services/FileService";
import TopBar from "./TopBar";

const FileUpload = () => {
  
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');


  const selectFiles = function(event) {
    setSelectedFiles(event.target.files);
  }

  const upload = function() {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    FileService.upload(currentFile, event => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
    .catch(() => {
      setProgress(0);
      setMessage('Could not upload the file');
      setCurrentFile(null);
    });

    setSelectedFiles(null);
  }

  const useStyles = makeStyles({
    container: {
      minHeight: '300px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'start',
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    progressBar: {
      width: '100%'
    }
  });

  const classes = useStyles();

  return (
    <div>
      <TopBar/>
      <Container className={classes.container} maxWidth='md'>
        <Typography variant='h5'>File Upload</Typography>
        <Typography >Uploading file: </Typography>
        <LinearProgress className={classes.progressBar} variant='determinate' value={progress}/>
        <Container className={classes.buttonsContainer}>
          <Button display='block' variant='contained' size='medium' startIcon={<FolderOpen/>} component='label'>Choose files
            <input type='file' hidden multiple onChange={selectFiles}/>
          </Button>
          <Button variant='contained' color='primary' size='medium' startIcon={<Publish/>} disabled={!selectedFiles} onClick={upload}>Upload</Button>
        </Container>
        {message ? <Alert severity='warning'>{message}</Alert> : null}
      </Container>
    </div>
  )
}

export default FileUpload;
