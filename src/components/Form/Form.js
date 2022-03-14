import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux'; //Import Dispatcher
import { createPost, updatePost } from '../../actions/posts';//Import Action from the actions

const Form = ({ currentId, setCurrentId, user }) => {
    const dispatch = useDispatch();//Create dispatch
    const history = useHistory();//To use redirect 
    const post = useSelector((state) => currentId ? state.data.posts.find(post => post._id === currentId) : null);
    const classes = useStyles(); 
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const clear = () => {
        setCurrentId(0);
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    useEffect(() => {
        if(post) setPostData(post); 
    }, [post])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if( currentId ){
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}, history));
            clear();
        }else{
            dispatch(createPost({...postData, name: user?.result?.name }, history));
            //Dispatch action here
            history.push('/posts')
            clear();
        }
    }

    if(!user?.result?.name){
        return (
            <Paper className={classes.paper + " " + classes.box} elevation={6}>
                <Typography variable='h5' align='center'>
                    Please <Link to='/auth'>Sign In</Link> to share your Glimpses or like other's.
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className = { classes.paper } elevation={6}>
            <form autoComplete = 'off' noValidate className = { `${classes.root} ${classes.form}` } onSubmit = { handleSubmit }>
                <Typography variant = "h5" className={'gradient__text__1' + " " + classes.headingFont}>{currentId ? "Edit" : "Create"} a Glimpse</Typography>
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
                    multiline
                    rows={4}
                    value = { postData.message }
                    //In order to setState using an object -
                    onChange = { (e) => setPostData({ ...postData, message: e.target.value }) }
                />
                <TextField
                    name = 'tags'
                    variant = 'outlined'
                    label = 'Tags(comma separated)'
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
    )
};
export default Form;
