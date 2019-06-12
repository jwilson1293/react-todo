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
    status: 'Complete'
  },
  {
    id: 2,
    description: 'Find a crew',
    status: 'Incomplete'
  },
  {
    id: 3,
    description: 'Hunt the raven',
    status: 'Incomplete'
  }
];

function App() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(todoItems.filter(v => v.status === 'Complete').map(x => x.id));

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <List className={classes.list}>
        {todoItems.map(item => {
          return (
            <ListItem key={item.id} role={undefined} dense button onClick={handleToggle(item.id)}>
              <ListItemIcon>
                <Checkbox edge="start" checked={checked.indexOf(item.id) !== -1} tabIndex={-1} disableRipple />
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