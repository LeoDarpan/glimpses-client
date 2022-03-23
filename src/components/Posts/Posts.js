import React from 'react';
import useStyles from './styles';
import Post from './Post/Post';
import '../../App.css';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';

import { Grid, CircularProgress, Paper } from '@material-ui/core';

import { useSelector } from 'react-redux';//A hook to fetch data from the global redux store

function Posts({ setCurrentId }) {
    const { posts, isLoading } = useSelector((state) => state.data);
    const classes = useStyles();


    if(!posts.length && !isLoading) return (
        <>
            <div className={classes.noPostsBox}>
                <div className={classes.noPosts}>
                    <span className={classes.noText}>Be the first one to post</span>
                    <DriveFileRenameOutlineRoundedIcon className={classes.writeIcon}/>
                </div>
                <div className={classes.add}>Hover on the action buttons to the right and click on "<span className={classes.underline}>Add a Glimpse</span>" to post.</div>
            </div>
        </>
    );

    return (
        isLoading ? (
            <div className={classes.loadingPaper}>
                <CircularProgress size='7em' />
            </div>
        ) : (
            <Grid className={classes.container} container item={true} alignItems='stretch' spacing={3} >
                {
                    posts.length > 0 && posts.map((post) => (
                        <Grid item={true} key={post._id} xs={12} sm={6} md={6} lg={3} >
                            <Post post={post} setCurrentId={setCurrentId} currentId={post._id}/>
                        </Grid>
                    ))
                }
            </Grid>
        )  
    );
}

export default Posts;
