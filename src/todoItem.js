import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem(props) {
    let [complete, setComplete] = React.useState(props.item.complete);

    return (
        <ListItem key={props.idx} role={undefined} dense button >
            <ListItemIcon>
                <Checkbox edge="start" checked={complete} tabIndex={-1} disableRipple onClick={props.handleToggle(props.idx)} value={complete} />
            </ListItemIcon>
            <ListItemText primary={props.item.title} />
            <IconButton className={props.classes.margin} onClick={props.handleRemove(props.idx)} >
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}

export default TodoItem;