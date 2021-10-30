import { useEffect, useState } from "react";
import './postsList.css';
import {Col, Container, Row} from "react-bootstrap";
import postService from '../services/post.service';
import Post from "../components/post/post";

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        findPosts();
    }, []);

    const findPosts = async () => {
        const postList = await postService.allPosts();
        setPosts(postList.map(post => (<Col><Post post={post} /></Col>)));
    }

    return(<>
            <h2>Recent Posts</h2>
            <Container fluid>
                <Row md={4}>{posts}</Row>
            </Container>
        </>);
}

export default PostsList;
