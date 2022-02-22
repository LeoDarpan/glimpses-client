import * as api from '../api';
import {FETCH_ALL, FETCH_ALL_BY_SEARCH, FETCH_POST, START_LOADING, STOP_LOADING, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';

//Action creators
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        
        const { data } = await api.fetchPost(id);

        dispatch({ type: FETCH_POST, payload: data });
        
        // Directly dispatch the action which is just an object
        dispatch({ type: STOP_LOADING })

    } catch (error) {
        console.log(error);
    }
}

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        
        const { data } = await api.fetchPosts(page);

        dispatch({ type: FETCH_ALL, payload: data });
        
        // Directly dispatch the action which is just an object
        dispatch({ type: STOP_LOADING })

    } catch (error) {
        console.log(error);
    }
    // const action = {
    //     type: 'FETCH_ALL',
    //     payload: []
    // }

    // dispatch(action); 
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        
        const { data : { data } }  = await api.fetchPostsBySearch(searchQuery);
        
        dispatch({ type: FETCH_ALL_BY_SEARCH, payload: data });
        
        dispatch({ type: STOP_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        
        const { data } = await api.createPost(post);
        
        history.push(`/posts/${data._id}`);

        dispatch({ type: CREATE, payload: data });
        
        dispatch({ type: STOP_LOADING })
    } catch (error) {
        console.log(error.response.data);
    }
}

export const updatePost = (id, updatedPost, history) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);

        history.push(`/posts/${data._id}`)

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error.response.data);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const response = await api.deletePost(id);
        
        console.log(response);
        
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error.response.data);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.response.data);
    }
}