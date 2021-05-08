import React from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';

const SimpleMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (even) => {
        setAnchorEl(even.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(undefined);
    };

    return ( 
        <div> 
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu 
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}> Profile </MenuItem>
                <MenuItem onClick={handleClose}> My acount </MenuItem>
                <MenuItem onClick={handleClose}> Information </MenuItem>
                <MenuItem onClick={handleClose}> Storage </MenuItem>
                <MenuItem onClick={handleClose}> Log out </MenuItem>
            </Menu>
        </div>
    );
}

export default SimpleMenu;