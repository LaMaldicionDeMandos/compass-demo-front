import './post.css';
import Moment from 'moment';
import { Row } from "react-bootstrap";
import { PostTag } from "../postTag/postTag";
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const history = useHistory();

    const post = props.post;
    Moment.locale('es');

    const clickHandler = () => history.push(`/posts/${post.id}`);

    return (<div className="Post" onClick={clickHandler}>
        <img src={post.image}/>
        <div className="post-data">
            <PostTag tag={post.tag} />
            <div className="post-date">{Moment(post.date).format('MMM DD, YYYY')}</div>
        </div>
        <Row>
            <label>{post.title}</label>
        </Row>
    </div>);
}

export default Post;
