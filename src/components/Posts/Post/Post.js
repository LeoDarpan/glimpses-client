import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
//Initialise dispatch
import { useDispatch } from 'react-redux';
//Import Action
import { deletePost, likePost } from '../../../actions/posts';

function Post({ post, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deletePost(post._id));
    }
    const handleLike = () => {
        dispatch(likePost(post._id));
    }
    console.log(moment(post.createdAt).format('LLL'));
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
                <div className={classes.overlay}>
                    <Typography variant='h6'>{post.creator}</Typography>
                    <Typography variant='body2'>{moment(post.createdAt).format('lll')}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button 
                    style={{color: 'white'}} 
                    size='small' 
                    onClick={() => {
                        setCurrentId(post._id);
                    }}
                    >
                        <MoreHorizIcon fontSize='medium'/>
                    </Button>
                </div>
                
            </CardMedia>
            <CardContent>
                <div className={classes.details}>
                    <Typography className={classes.title} variant='h5' gutterBottom>
                        {post.title}
                    </Typography> 
                </div>
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {post.message}
                    </Typography>        
                </div>
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>
                        {post.tags == '' ? null : post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={ handleLike }>
                    <ThumbUpAltIcon fontSize='small' style={{marginRight: '5px', position: 'relative', top: '-2px'}} />
                    {'Like ' + post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={ handleDelete }>
                    <DeleteIcon fontSize='small' style={{marginRight: '5px', position: 'relative', top: '-2px'}}/>
                    Delete
                </Button>
            </CardActions>
        </Card>

    )
}

export default Post
