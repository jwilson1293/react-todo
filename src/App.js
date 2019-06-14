import React, { useEffect, useState } from 'react';
import $ from 'jquery';

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

function App() {
  const classes = useStyles();

  let [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax('https://jsonplaceholder.typicode.com/todos').then(response => {
      setItems(response);
    })
  }, []);

  const handleToggle = value => () => {
    let newItems = [...items];
    newItems[value].complete = !newItems[value].complete;
    setItems(newItems);
  };

  const handleAdd = desc => () => {
    let newItems = [...items];
    newItems.push({title: desc, complete: false, id: items.length + 1});
    setItems(newItems);
  }

  const handleRemove = idx => () => {
    let newItems = [...items];
    newItems.splice(idx, 1);
    setItems(newItems);
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <ItemAdder handleAdd={handleAdd} />
      <List className={classes.list}>
        {items.map((item, idx) => {
          return (
            <TodoItem
              key={idx}
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
    </Grid>
  );
}

export default App;