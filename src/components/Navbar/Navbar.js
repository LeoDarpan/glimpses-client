import React, { useEffect, useState } from 'react';
import { Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LoginRounded';
import BungalowRoundedIcon from '@mui/icons-material/BungalowRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import './style.css';

const Navbar = ({ user, setUser }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory('');
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    //Immediately get the user from the localstorage if exists
    //User goes into the localstorage once google signed in
    
    const logout = () => {
        console.log('Logging out');
        dispatch({ type: actionType.LOGOUT});
        history.push('/');
        setUser(null);
    }

    const handleUser = () => {
        const userBox = document.querySelector(".user-actions");
        const downIcon = document.querySelector(".down-icon");
        if(!clicked){
            setClicked(true);
            userBox.style.transform = "scaleY(1)";
            downIcon.style.transform = "rotate(180deg)";
        }else{
            setClicked(false);
            userBox.style.transform = "scaleY(0)";
            downIcon.style.transform = "rotate(0deg)";
        }
    }

    useEffect(() => {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div>
            <div className = { classes.appBar } position = "static" color = 'inherit'>
                <div className={classes.toolbar}>
                    <div className='icon-box'>
                        {/* <Button component={Link} to ='/auth' variant='contained' color='primary'><LoginRoundedIcon className="icon" /></Button> */}
                        <Link to ='/' className={classes.link + "link"}>
                            <BungalowRoundedIcon className="icon" />
                        </Link>
                        <div className="tooltip" style={{left: "-15px", top: "45px"}} >HOME</div>
                    </div>
                </div>
                <div className={ classes.brandContainer }>
                    <Typography className={classes.appHeading} component={Link} to='/'>
                        Glimpses
                    </Typography>
                </div>
                <div className={classes.toolbar}>
                    {
                        user ? (
                            <div className={classes.profile}>
                                <div className={classes.user} onClick={handleUser}>
                                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                                        {user.result.name.charAt(0)}
                                    </Avatar>
                                    <KeyboardArrowDownRoundedIcon className="down-icon"/>
                                    <div className="user-actions">
                                        <h2 className={classes.userName}>
                                            {
                                                user.result.name
                                            }
                                        </h2>
                                        <div className='icon-box'>
                                            <div className={classes.link + "link"}>
                                                <LogoutRoundedIcon className="icon logout-icon" onClick={ logout } />
                                            </div>
                                            <div className="tooltip tooltip-logout">LOGOUT</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <Button variant='contained' className={classes.logout} color='secondary' onClick={ logout }>Logout</Button> */}
                                
                            </div>
                        ) : (
                            <div className='icon-box'>
                                {/* <Button component={Link} to ='/auth' variant='contained' color='primary'><LoginRoundedIcon className="icon" /></Button> */}
                                <Link to ='/auth' className={classes.link + "link"}>
                                    <LoginRoundedIcon className="icon" />
                                </Link>
                                <div className="tooltip">SIGN IN</div>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;
