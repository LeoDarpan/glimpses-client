import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Navbar = ({ user, setUser }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory('');
    const location = useLocation();

    //Immediately get the user from the localstorage if exists
    //User goes into the localstorage once google signed in
    
    const logout = () => {
        console.log('Logging out');
        dispatch({ type: actionType.LOGOUT});
        history.push('/');
        setUser(null);
    }
    useEffect(() => {
        const token = user?.token;
        //JWT ...
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    console.log(user);
    return (
        <div>
            <AppBar className = { classes.appBar } position = "static" color = 'inherit'>
                <div className={classes.brandContainer}>
                    <Typography className={'gradient__text' +  " " + classes.appHeading} variant = "h2" component={Link} to='/'>
                        Glimpses
                    </Typography>
                    <img className = { classes.image } src= 'https://i.pinimg.com/474x/f0/f6/6e/f0f66e9196fe55d62653cf56c3585435.jpg' alt="Glimpses" height = '60' width = '60'/>
                </div>
                <Toolbar className={classes.toolbar}>
                    {
                        user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                                    {user.result.name.charAt(0)}
                                </Avatar>
                                <Typography className={classes.userName} variant='h6'>
                                    {
                                        user.result.name
                                    }
                                </Typography>
                                <Button variant='contained' className={classes.logout} color='secondary' onClick={ logout }>Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to ='/auth' variant='contained' color='primary'>Sign In</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
