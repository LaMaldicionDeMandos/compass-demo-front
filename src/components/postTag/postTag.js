import './postTag.css';

import { Component } from "react";

export class PostTag extends Component{
    render() {
        const tag = this.props.tag;
        return <div className={'PostTag ' + tag}>
                <label>{tag}</label>
        </div>;
    }
}
