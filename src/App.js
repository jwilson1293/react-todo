import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const todoItems = [
  {
    id: 1,
    description: 'Find a ship',
    complete: true
  },
  {
    id: 2,
    description: 'Find a crew',
    complete: false
  },
  {
    id: 3,
    description: 'Hunt the raven',
    complete: false
  }
];

function App() {
  const classes = useStyles();

  let [items, setItems] = React.useState([...todoItems]);

  const handleToggle = value => () => {
    let newItems = [...items];
    newItems[value].complete = !newItems[value].complete;
    setItems(newItems);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <List className={classes.list}>
        {items.map((item, idx) => {
          return (
            <ListItem key={idx} role={undefined} dense button onClick={handleToggle(idx)}>
              <ListItemIcon>
                <Checkbox edge="start" checked={item.complete} tabIndex={-1} disableRipple />
              </ListItemIcon>
              <ListItemText primary={item.description} />
            </ListItem>
          )})
        }
      </List>
    </Grid>
  );
}

export default App;