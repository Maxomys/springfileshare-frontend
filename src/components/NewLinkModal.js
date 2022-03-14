import React, { useEffect, useState } from "react";
import { Button, Card, Icon, makeStyles, Modal, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DataService from "../services/DataService";

const NewLinkModal = ({open, handleClose, fileId}) => {

  const [link, setLink] = useState({
    storedFileId: fileId,
    remainingUses: null,
    expirationTime: ''
  });

  useEffect(() => {
    setLink(prevState => ({...prevState, storedFileId: fileId}));
  }, [fileId]);

  function handleDateChange(event) {
    setLink(prevState => ({...prevState, expirationTime: event.target.value}));
  };

  function handleNumberChange(event) {
    setLink(prevState => ({...prevState, remainingUses: event.target.value}));
  }

  function addLink(event) {
    DataService.postNewLink(link);
    handleClose();
  }

  const useStyles = makeStyles({
    modal: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
      position: 'absolute',
      width: '800px',
      padding: '20px 10px 20px 10px',
      margin: '30px 0 10px',
      display: 'flex',
      flexDirection: 'column'
    },
    cardTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  })

  const classes = useStyles();

  return (

    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <TextField
            id="datetime-local"
            label="Expiration date"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => handleDateChange(event)}
          />
          <TextField
            id="standard-number"
            label="Number of uses"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => handleNumberChange(event)}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<AddIcon/>}
            onClick={event => addLink(event)}
          >
            Add Link
          </Button>
        </div>
      </Card>
    </Modal>

  );

}

export default NewLinkModal;
