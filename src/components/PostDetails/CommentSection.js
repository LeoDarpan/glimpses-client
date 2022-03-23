import React, { useState, useRef, useEffect } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';

import useStyles  from './styles';

const CommentSection = ({ post }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const classes = useStyles(); 
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');
  const commentsRef = useRef();

  const handleClick = async () => {
    const finalComment = `${user?.result?.name}: ${comment}`;
    
    const newComments = await dispatch(commentPost(finalComment, post._id));

    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant='h6' className={classes.heading}>Comments</Typography>
          {
            comments.length ? (comments.map((comment, index) => (
              <Typography variant='subtitle1' key={index} gutterBottom>
                <strong>{comment.split(':')[0]}</strong>
                {': '  + comment.split(':')[1]}
              </Typography>
            ))) : (
              <Typography variant='subtitle2' gutterBottom>
                No comments...
              </Typography>
            )
          }
          <div ref={commentsRef}/>
        </div>
        {
          user?.result?.name ? (
            <div style={{width: '60%', padding: '10px'}}>
              <Typography gutterBottom variant='h6' className={classes.heading}>Write a Comment</Typography>
              <TextField 
                fullWidth
                rows={4}
                variant='outlined' 
                label='Comment'
                multiline
                value={comment}
                onChange={event => setComment(event.target.value)}
              />
              <Button style={{marginTop: '10px'}}  fullWidth disabled={!comment} variant='contained' onClick={handleClick} color='primary'>
                Add Comment
              </Button>
            </div>
          ) : (
              <div className={classes.loginMessage + " " + classes.heading}>
                Login to comment...
              </div>
          )
        }
        </div>
    </div>
  )
}

export default CommentSection;