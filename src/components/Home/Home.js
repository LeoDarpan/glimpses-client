//Hooks
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

//Material-ui Components
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';

//Styles
import useStyles from './styles';

//Components
import { Form, Posts, Pagination } from '../index';

//Redux components
import { useDispatch } from 'react-redux'; //Allows dispatching actions
import { getPosts, getPostsBySearch } from '../../actions/posts';

//To search and To get the current page address and to decide where to send
import ChipInput from 'material-ui-chip-input';


//This function can be used as a hook
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Home = ({ user }) => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    //Search related variables
    const query = useQuery();//To get the page info
    const history = useHistory();
    const page = query.get('page') || 1; 
    //Give value to the variable only if there is 'page' string in the URL or Give it the first page
    const searchQuery = query.get('searchQuery');
    
    // useEffect( () => {
    //     dispatch( getPosts() );//Successful dispatch.
    // }, [ currentId, dispatch ])

    const handleKeyPress = (event) => {  
        if(event.keyCode === 13){
            searchPost()
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag])
    }

    const handleDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete))
    }

    const searchPost = () => {
        if(search.trim() === '' && tags.join(',')  === ''){
            history.push('/');
        }else{
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }
    }

    return (
        <div>
            <Grow in> 
                    <Container maxWidth="xl">
                        <Grid container item={true} justifyContent = 'space-between' alignItems = 'stretch' spacing = {3} className={classes.mainContainer}>
                            <Grid item={true} xs={12} sm={6} md={9} >
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item={true} xs={12} sm={12} md={3}>
                                <AppBar className={classes.appBarSearch} position='static' color="inherit">
                                    <TextField
                                        name="search"
                                        variant="outlined"
                                        label="Search Memories"
                                        fullWidth
                                        value={search}
                                        onChange={(event) => {setSearch(event.target.value)}}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <ChipInput
                                        style={{margin: '10px 0px'}}
                                        value={tags}
                                        onAdd={handleAdd}
                                        onDelete={handleDelete}
                                        label="Search Tags"
                                        variant="outlined"
                                    />
                                    <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">
                                        Search
                                    </Button>
                                </AppBar>
                                <Form currentId={currentId} setCurrentId={setCurrentId} user={user}/>
                                <Paper elevation={6}>
                                    <Pagination page={page} /> 
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
             </Grow>
             {/* <div className="test-div">
                <div className="test-div__inside">
                    <button onClick={openModal}>x</button>
                    <p>Inside the test div</p>
                </div>
            </div> */}
        </div>
    )
}
export default Home;
