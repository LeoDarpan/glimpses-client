import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { signin, signup } from '../../actions/auth';
import Icon from './Icon';
import useStyles from './styles';

const initialState = {
    firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
}

const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history));
        }else{
            dispatch(signin(formData, history));
        }
    };
    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name] : event.target.value
        })
    };
    const switchMode = () => {
        setIsSignup((prev) => !prev);
    }
    const googleSuccess = async (response) => {
        const result = response?.profileObj; //Without ?, there will be an error that cannot access the property and with ? the value will be undefined.
        //This is the beauty of the optional chaining operator.
        const token = response?.tokenId;
        try {
            dispatch({ type: "AUTH", data: { result, token }});     
            history.push('/');       
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log("Google Sign in failed. Try again later!")
        console.log(error);
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>
                    {
                        isSignup ? 'Sign Up' : 'Sign In'
                    }
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input 
                                        name='firstName' 
                                        label='First Name'
                                        handleChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input 
                                        name='lastName' 
                                        label='Last Name'
                                        handleChange={handleChange}
                                        half
                                    />
                                </>
                            )
                        }
                        <Input 
                            name='email'
                            label='Email Address'
                            handleChange={handleChange}
                            type='email'
                        />
                        <Input 
                            name='password'
                            label='Password'
                            handleChange={handleChange}
                            type={showPassword ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                        />
                        {
                            isSignup && <Input name='confirmPassword' type='password' handleChange={handleChange} label='Confirm Password'/>
                        }
                        <Button className={classes.submit} fullWidth variant='contained' color='primary' type='submit'>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin 
                            clientId = '993026491442-7hes5q7l5kt8vm9d6acq8sacem3daqp3.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button 
                                    className={classes.googleButton} 
                                    color='primary' 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} 
                                    startIcon={<Icon />}
                                    variant='contained'
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        />
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {
                                        isSignup 
                                            ? 'Already have an account? Sign In'
                                            : "Don't have an account? Sign Up"
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}
export default Auth;
