import {find} from 'lodash';

const API_URL = process.env.REACT_APP_API_URL;
class PostService {

    allPosts() {
        return this.#getPosts();
    }

    async findPost(id) {
        const posts = await this.#getPosts();
        return find(posts,{id: id});
    }

    #loadAllPosts = () => {
        return fetch(`${API_URL}/posts`)
            .then(res => res.json())
            .then(o => o.posts);
    }

    #getPosts = () => {
        return this.#posts ? Promise.resolve(this.#posts) : this.#loadAllPosts();
    }

    #posts = undefined;

}

const service = new PostService();
export default service;
