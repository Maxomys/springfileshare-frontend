import React from 'react';
import Modal from '@material-ui/core/Modal';
import { IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, makeStyles, Card, Button} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
    cardTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
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
          <List>
            {links.map(link => (
              <ListItem key={link.id}>
                <ListItemText primary={link.url}></ListItemText>
                <ListItemText>Remaining uses: {link.remainingUses}</ListItemText>
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
    </Modal>

  );
}

export default LinksModal;
