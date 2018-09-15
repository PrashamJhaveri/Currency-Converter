import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';




const Titles = () => (
    <div>
        <AppBar position="static" style={{backgroundColor: '#2c3242'}}>
            <Toolbar>
                <Typography variant="title" color="inherit" >
                    Exchange Currency
                </Typography>
            </Toolbar>
        </AppBar>        
    </div>


);

export default Titles;