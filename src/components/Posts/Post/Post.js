import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
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
    const user = JSON.parse(localStorage.getItem("profile"));
    
    const handleDelete = () => {
        dispatch(deletePost(post._id));
    }
    const handleLike = () => {
        dispatch(likePost(post._id));
    }
    console.log(post);
    console.log(user);
    //Subcomponent for POST component - Likes
    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
                <div className={classes.overlay}>
                    <Typography variant='h6'>{post.name}</Typography>
                    <Typography variant='body2'>{moment(post.createdAt).format('lll')}</Typography>
                </div>
                <div className={classes.overlay2}>
                {(user?.result?.googleId === post?.creator ||  user?.result?._id === post?.creator) && (
                    <Button 
                    style={{color: 'white'}} 
                    size='small' 
                    onClick={() => {
                        setCurrentId(post._id);
                    }}
                    >
                        <MoreHorizIcon fontSize='medium'/>
                    </Button>
                )}
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
                <Button size='small' color='primary' disabled={!user?.result} onClick={ handleLike }>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator ||  user?.result?._id === post?.creator) && (
                <Button size='small' color='primary' onClick={ handleDelete }>
                    <DeleteIcon fontSize='small' style={{marginRight: '5px', position: 'relative', top: '-2px'}}/>
                    Delete
                </Button> 
                )}
            </CardActions>
        </Card>

    )
}

export default Post
