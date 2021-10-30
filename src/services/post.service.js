import {find} from 'lodash';

const API_URL = process.env.REACT_APP_API_URL;
class PostService {

    async allPosts() {
        this.#posts = await fetch(`${API_URL}/posts`)
            .then(res => res.json());
        return this.#posts;
    }

    findPost(id) {
        return Promise.resolve(find(this.#posts,{id: id}));
    }

    #posts = undefined;

}

const service = new PostService();
export default service;
