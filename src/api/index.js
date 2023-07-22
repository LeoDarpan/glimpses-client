import axios from 'axios';
//Replace the local url with the heroku url after deploying the backend first
const API = axios.create({ baseURL: 'https://glimpses-server.onrender.com/' });

//sending token back to the backend, so that the backend middleware can verify that user
//is actually logged in.
//This happenes before all of the below requests!!

API.interceptors.request.use((request) => {
    if(localStorage.getItem('profile')) {
        request.headers.authorization = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token;
    }
    return request;
});


export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

export const fetchPost = (id) => API.get(`posts/${id}`);

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const createPost = (newPost) => API.post('/posts/create', newPost);

export const updatePost = (id, updatedPost) => API.patch( '/posts/' + id, updatedPost); 

export const deletePost = (id) => {API.delete("/posts/delete/" + id)};

export const likePost = (id) => API.patch(`/posts/${id}/likePost`); 

export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value })

export const signin = (formData) => API.post('/users/signin', formData);

export const signup = (formData) => API.post('/users/signup', formData);
