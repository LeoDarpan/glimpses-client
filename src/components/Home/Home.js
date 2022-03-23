//Hooks
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Material-ui Components
import { Container, Grow, Grid } from '@material-ui/core';

//Styles
import useStyles from './styles';

//Components
import { Posts, Pagination, Openers } from '../index';

//This function can be used as a hook
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Home = ({ user }) => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1; 

    return (
        <div>
            <Grow in> 
                    <Container maxWidth="xl">
                        <Grid container item={true} justifyContent = 'space-between' alignItems = 'stretch' spacing = {3} className={classes.mainContainer}>
                            <Grid item={true} xs={12} sm={12} md={12} lg={12} >
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
            </Grow>
            <Openers currentId={currentId} setCurrentId={setCurrentId} user={user} />
            <Pagination page={page} /> 
        </div>
    )
}
export default Home;
