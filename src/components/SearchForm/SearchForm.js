//Hooks
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

//Styles
import useStyles from './styles';

//Material-ui Components
import { AppBar, TextField, Button } from '@material-ui/core';

//Redux components
import { useDispatch } from 'react-redux'; //Allows dispatching actions
import { getPostsBySearch } from '../../actions/posts';

//To search and To get the current page address and to decide where to send
import { MuiChipsInput } from 'mui-chips-input';

//This function can be used as a hook
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    
    const classes = useStyles();
    const dispatch = useDispatch();
    
    //Search related variables
    const query = useQuery();//To get the page info
    const history = useHistory();
    const page = query.get('page') || 1; 
    const location = useLocation();
    
    //Give value to the variable only if there is 'page' string in the URL or Give it the first page
    const searchQuery = query.get('searchQuery');
    
    const handleKeyPress = (event) => {  
        if(event.which === 13){
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
            history.push('/posts');
        }else{
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push( `${location.pathname}/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }
    }

  return (
    <AppBar className={classes.appBarSearch} position='static' color="inherit">
        <TextField
            name="search"
            variant="outlined"
            label="Search Memories"
            fullWidth
            value={search}
            onChange={(event) => {setSearch(event.target.value)}}
            onKeyUp={handleKeyPress}
        />
        <MuiChipsInput
            style={{margin: '10px 0px'}}
            value={tags}
            label="Search Tags"
            variant="outlined"
            onAddChip={handleAdd}
            onDeleteChip={handleDelete}
        />
        <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">
            Search
        </Button>
    </AppBar>
  )
}

export default SearchForm;