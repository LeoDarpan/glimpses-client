import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux'; //Import Dispatcher
import { createPost, updatePost } from '../../actions/posts';//Import Action from the actions

function Form({ currentId, setCurrentId }) {
    const dispatch = useDispatch();//Create dispatch
    const post = useSelector((state) => currentId ? state.posts.find(post => post._id === currentId) : null);
    const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    useEffect(() => {
        if(post) setPostData(post); 
    }, [post])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData));//Dispatch action here
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    return (
        <div>
            <Paper className = { classes.paper }>
                <form autoComplete = 'off' noValidate className = { `${classes.root} ${classes.form}` } onSubmit = { handleSubmit }>
                    <Typography variant = "h4" className={'gradient__text__1' + " " + classes.headingFont}>{currentId ? "Edit" : "Create"} a Glimpse</Typography>
                    <TextField
                        name = 'creator'
                        variant = 'outlined'
                        label = 'Creator'
                        fullWidth
                        value = { postData.creator }
                        //In order to setState using an object -
                        onChange = { (e) => setPostData({ ...postData, creator: e.target.value }) }
                    />
                    <TextField
                        name = 'title'
                        variant = 'outlined'
                        label = 'Title'
                        fullWidth
                        value = { postData.title }
                        //In order to setState using an object -
                        onChange = { (e) => setPostData({ ...postData, title: e.target.value }) }
                    />
                    <TextField
                        name = 'message'
                        variant = 'outlined'
                        label = 'Message'
                        fullWidth
                        value = { postData.message }
                        //In order to setState using an object -
                        onChange = { (e) => setPostData({ ...postData, message: e.target.value }) }
                    />
                    <TextField
                        name = 'tags'
                        variant = 'outlined'
                        label = 'Tags'
                        fullWidth
                        value = { postData.tags }
                        //In order to setState using an object -
                        onChange = { (e) => setPostData({ ...postData, tags: e.target.value.split(',') }) }
                    />
                    <div className = { classes.fileInput}>
                        <FileBase 
                            type = "file"
                            multiple = { false }
                            onDone = {({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                        />
                    </div>
                    <Button className = { classes.buttonSubmit } variant = 'contained' color = 'primary' size = 'large' type = 'submit' fullWidth>Submit</Button>
                    <Button variant = 'contained' color = 'secondary' size = 'small' onClick = { clear } fullWidth>Clear</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Form
