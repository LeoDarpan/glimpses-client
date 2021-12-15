import React from 'react';
import useStyles from './styles';
import Post from './Post/Post';
import '../../App.css';

import { Grid, CircularProgress } from '@material-ui/core';

import { useSelector } from 'react-redux';//A hook to fetch data from the global redux store

function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    return (
        !posts.length ? (
            <CircularProgress />
        ) : (
            <Grid className={classes.container} container item={true} alignItems='stretch' spacing={3} >
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
        
    )
}

export default Posts;
