import React, { useEffect, useState } from 'react';
import "./App.css";

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; //Allows dispatching actions

import { getPosts } from './actions/posts';

import { Form, Posts } from './components';

import useStyles from './styles';

function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getPosts() );//Successful dispatch.
    }, [ dispatch ])

    return (
        <div>
            <Container  maxWidth = 'lg'>
                <AppBar className = { classes.appBar } position = "static" color = 'inherit'>
                    <Typography className={'gradient__text' +  " " + classes.appHeading} variant = "h2">
                        Glimpses
                    </Typography>
                    <img className = { classes.image } src= 'https://www.pinclipart.com/picdir/middle/97-976108_face-clipart-minion-minion-avatar-png-download.png' alt="Glimpses" height = '60' width = '60'/>
                </AppBar>
                <Grow in> 
                    <Container>
                        <Grid container item={true} justifyContent = 'space-between' alignItems = 'stretch' spacing = {3} className={classes.mainContainer}>
                            <Grid item={true} xs = {12} sm = {7}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item={true} xs = {12} sm = {4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}
export default App;
