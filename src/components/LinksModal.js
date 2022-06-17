import React from 'react';
import Modal from '@material-ui/core/Modal';
import { IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, makeStyles, Card, Button} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const LinksModal = ({open, handleClose, links}) => {
  
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
    list: {
      width: '100%'
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
        <List className={classes.list}>
          {links.map(link => (
            <ListItem key={link.id} align-items='flex-end'>
              <ListItemText primary={link.url} secondary={'Remaining uses: ' + link.remainingUses} />
              <ListItemSecondaryAction>
                <IconButton edge='start'>
                  <FileCopyIcon/>
                </IconButton>
                <IconButton edge='end'>
                  <DeleteForeverIcon/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Card>
    </Modal>

  );
}

export default LinksModal;
