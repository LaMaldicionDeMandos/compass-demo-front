import { useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import postService from "../services/post.service";
import Post from "../components/post/post";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        findPost(Number.parseInt(id));
    }, []);

    const findPost = async (id) => {
        const p = await postService.findPost(id);
        console.log('post => ' + JSON.stringify(p));
        setPost(<Post post={p} />);
    }
    return (<> {post}</>);
}

export default PostPage;
