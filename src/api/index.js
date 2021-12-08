import axios from 'axios';

const url = 'https://glimpses-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url + '/create', newPost);

export const updatePost = (id, updatedPost) => axios.patch(url + '/' + id, updatedPost); 

export const deletePost = (id) => {axios.delete(url + "/delete/" + id).then((response) => alert(response.data.message)); console.log(url + "/delete/" + id)};

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`); 
