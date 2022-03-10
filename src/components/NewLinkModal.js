import React, { useEffect } from "react";
import { Button, Card, Icon, makeStyles, Modal, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const NewLinkModal = ({open, handleClose}) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

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
          <form className={classes.container} noValidate>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => handleDateChange(event)}
            />
          </form>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<AddIcon/>}
            onClick
          >
            Add Link
          </Button>
        </div>
      </Card>
    </Modal>

  );

}

export default NewLinkModal;
