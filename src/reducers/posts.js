//Reducer is a function that accepts the state and action
//Based on the action type, it returns an action or a state that has changed
//It has a lot of if statements, that's why switch statement is preferred here

//State can't be null so here it is an empty array, as in future, the posts would be 
//in an array.
import {FETCH_ALL, FETCH_POST, FETCH_ALL_BY_SEARCH, START_LOADING, STOP_LOADING, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';

const output = (state = {isLoading: true, posts: []}, action) => {
    switch (action.type){
        case START_LOADING:
            return { ...state, isLoading: true }
        case STOP_LOADING:
            return { ...state, isLoading: false }
        case FETCH_ALL:
            return {
                ...state, 
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages, 
            };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case FETCH_ALL_BY_SEARCH:
            return { ...state, posts: action.payload };
        case CREATE:
            return {...state, posts: [...state.posts, action.payload]};
        case UPDATE:
        case LIKE:
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};
        case DELETE:
            return {...state, posts: state.posts.filter((post) => post._id !== action.payload)};
        default:
            return state;
    }       
}
export default output;