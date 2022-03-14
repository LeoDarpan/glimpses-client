import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import './style.css';

import { useHistory, useLocation } from 'react-router-dom';
//Initialise dispatch
import { useDispatch } from 'react-redux';
//Import Action
import { deletePost, likePost } from '../../../actions/posts';

function Post({ post, setCurrentId }) {
    const location = useLocation();
    const message = post.message;
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();

    const handleDelete = () => {
        dispatch(deletePost(post._id));
    }

    const handleLike = () => {
        dispatch(likePost(post._id));
    }

    //Subcomponent for POST component - Likes
    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <>
                        <div className="tooltip">
                            <ThumbUpAltIcon fontSize="medium" />
                            <div className="tooltipText" id="likes">
                                {post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="tooltip">
                            <ThumbUpAltOutlined fontSize="medium" />
                            <div className="tooltipText" id="likes">
                                {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                            </div>
                        </div>
                    </>
                );
        }
        return (
            <>
                <div className="tooltip">
                    <ThumbUpAltOutlined fontSize="medium" />
                    <div className="tooltipText" id="likes">
                        {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </div>
                </div>
            </>
        )           
    };

    const openPost = () => {
        location.pathname = '/posts';
        history.push(`${location.pathname}/${post._id}`);
    }

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2} name="edit">
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentId(post._id);
                            }}
                            style={{ color: 'white' }}
                            size="small"
                        >
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20)}...</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <div className="tooltip">
                        <Button className="button" size="medium" color="secondary" onClick={ handleDelete }>
                            <DeleteIcon fontSize="medium" />
                        </Button>
                        <div className="tooltipText tooltipText-delete" id="delete">DELETE</div>
                    </div>
                )}
            </CardActions>
        </Card>
    )
}

export default Post
