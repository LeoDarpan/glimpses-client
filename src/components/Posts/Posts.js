import React from 'react';
import useStyles from './styles';
import Post from './Post/Post';
import '../../App.css';

import { Grid, CircularProgress, Paper } from '@material-ui/core';

import { useSelector } from 'react-redux';//A hook to fetch data from the global redux store

function Posts({ setCurrentId }) {
    const { posts, isLoading } = useSelector((state) => state.data);
    const classes = useStyles();

    if(!posts.length && !isLoading) return 'Nothing to show...';

    return (
        isLoading ? (
            <div className={classes.loadingPaper}>
                <CircularProgress size='7em' />
            </div>
        ) : (
            <Grid className={classes.container} container item={true} alignItems='stretch' spacing={3} >
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
        
    )
}

export default Posts;
