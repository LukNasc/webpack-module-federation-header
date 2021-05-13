import React from 'react';

import Styles from "./app-styles"
import { Box, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from "@material-ui/icons"
function App() {
    const classes = Styles();
    return (
        <Box component="div" className={classes.rootHeader}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img 
                        src="   https://115289-668573-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/logo-on-white-bg.png"
                        className={classes.logo}
                    />
                    <Typography variant="h6" className={classes.title}>
                        Restaurante
                    </Typography>
                    <IconButton>
                        <ShoppingCart className={classes.cart} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default App;