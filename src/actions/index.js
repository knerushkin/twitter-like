import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const SELECT_POST = "SELECT_POST";

export function fetchPosts() {
    const request = 
        axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPost(id) {
    const request = 
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + id);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function getPosts(post) {
    console.log("Selected post: ", post);
    return {
        type: SELECT_POST,
        payload: post
    }
}