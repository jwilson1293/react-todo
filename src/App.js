import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
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

  return (
    <div className="App">
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TodoHeader />
          <TableBody>
            {todoItems.map((item) => <TodoRow item={item} />)}
          </TableBody>
        </Table>
      </Paper>

      <Divider />

      <List className={classes.list}>
        {todoItems.map((item) => <TodoListItem item={item} />)}
      </List>
    </div>
  );
}

const TodoHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Status</TableCell>
        <TableCell>Description</TableCell>
      </TableRow>
    </TableHead>
  )
};

const TodoRow = (props) => {
  return (
    <TableRow>
      <TableCell>{props.item.status}</TableCell>
      <TableCell>{props.item.description}</TableCell>
    </TableRow>
  )
};

const TodoListItem = (props) => {
  return (
    <ListItem key={props.item.id} role={undefined} dense button >
      <ListItemIcon>
        <Checkbox edge="start" checked={props.item.status === 'Complete'} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={props.item.description} />
    </ListItem>
  )
};

export default App;