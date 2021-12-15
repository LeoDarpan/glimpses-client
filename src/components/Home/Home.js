import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

import { Form, Posts } from '../index';

import { useDispatch } from 'react-redux'; //Allows dispatching actions
import { getPosts } from '../../actions/posts';

const Home = ({ user }) => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getPosts() );//Successful dispatch.
    }, [ dispatch ])

    return (
        <div>
            <Grow in> 
                    <Container>
                        <Grid container item={true} justifyContent = 'space-between' alignItems = 'stretch' spacing = {3} className={classes.mainContainer}>
                            <Grid item={true} xs = {12} lg = {8} sm={12}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item={true} xs = {12} lg = {4} sm={6}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} user={user}/>
                            </Grid>
                        </Grid>
                    </Container>
             </Grow>
             {/* <div className="test-div">
                <div className="test-div__inside">
                    <button onClick={openModal}>x</button>
                    <p>Inside the test div</p>
                </div>
            </div> */}
        </div>
    )
}
export default Home;
