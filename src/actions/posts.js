import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionConstants';
//Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
        // Directly dispatch the action which is just an object

    } catch (error) {
        console.log(error);
    }
    // const action = {
    //     type: 'FETCH_ALL',
    //     payload: []
    // }

    // dispatch(action); 
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.response.data);
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);

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