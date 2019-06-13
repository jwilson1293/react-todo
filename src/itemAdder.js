import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
      margin: theme.spacing(1),
  },
}));

function ItemAdder(props) {
    const classes = useStyles();
    let [description, setDescription] = React.useState('');

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    const handleAdd = description => () => {
        if (description !== '') {
            props.handleAdd(description)();
            setDescription('');
        }
    }

    return (
        <form className={classes.container} noValidate>
            <TextField label="Description" className={classes.textField} value={description} variant="outlined" onChange={handleDescriptionChange}/>
            <Button variant="outlined" className={classes.button} onClick={handleAdd(description)}>Add</Button>
        </form>
    )
};

export default ItemAdder;