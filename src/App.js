import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import TodoItem from './todoItem';
import ItemAdder from './itemAdder';

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

  const handleAdd = desc => () => {
    let newItems = [...items];
    newItems.push({description: desc, complete: false, id: items.length + 1});
    setItems(newItems);
  }

  const handleRemove = idx => () => {
    let newItems = [...items];
    newItems.splice(idx, 1);
    setItems(newItems);
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <List className={classes.list}>
        {items.map((item, idx) => {
          return (
            <TodoItem
              item={item}
              idx={idx}
              handleRemove={handleRemove}
              handleAdd={handleAdd}
              classes={classes}
              handleToggle={handleToggle}
            />
          )})
        }
      </List>
      <ItemAdder handleAdd={handleAdd} />
    </Grid>
  );
}

export default App;