//Reducer is a function that accepts the state and action
//Based on the action type, it returns an action or a state that has changed
//It has a lot of if statements, that's why switch statement is preferred here

//State can't be null so here it is an empty array, as in future, the posts would be 
//in an array.
import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type){
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return { ...state, authData: action?.data };
        case LOGOUT: 
            localStorage.clear();
            return { ...state, authData: null, loading: false, errors: null};
        default:
            return state;
    }       
}
export default authReducer;