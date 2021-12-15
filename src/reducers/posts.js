//Reducer is a function that accepts the state and action
//Based on the action type, it returns an action or a state that has changed
//It has a lot of if statements, that's why switch statement is preferred here

//State can't be null so here it is an empty array, as in future, the posts would be 
//in an array.
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';

const output = (posts = [], action) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }       
}
export default output;