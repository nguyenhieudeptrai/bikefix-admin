import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';

import a8 from '../../../assets/utils/images/avatars/8.jpg';
import a9 from '../../../assets/utils/images/avatars/9.jpg';
import a10 from '../../../assets/utils/images/avatars/10.jpg';
import a11 from '../../../assets/utils/images/avatars/11.jpg';
import Comment from "./Comment";

export default class ListComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: []
        }
    }

    getComment = () => {
        let data = [
            {
                name: "Tran Thi Ha",
                avatar: a8,
                rate: 5,
                comment: "Rất nhiệt tình"
            },
            {
                name: "Dang Thanh Tam",
                avatar: a9,
                rate: 5,
                comment: "Rất nhiệt tình"
            },
            {
                name: "Hoang Van Trung",
                avatar: a10,
                rate: 5,
                comment: "Hoan thanh tot!"
            },
            {
                name: "Trung Gia Binh",
                avatar: a11,
                rate: 5,
                comment: "Good job"
            },
            {
                name: "Dang Hoang Son",
                avatar: a11,
                rate: 5,
                comment: "Good job"
            },
            {
                name: "Trung Gia Binh",
                avatar: a11,
                rate: 5,
                comment: "Good job"
            },
        ];
        this.setState({
            src: data
        })
    }
    componentWillMount() {
        this.getComment();
    }

    render() {
        return (
            <div className="view-comment">
                <h4>Comments ({this.state.src.length}):</h4>
                <div className="list-comment">
                    {this.state.src.map((val, index) => {
                        return (
                            <Comment
                                key={index}
                                name={val.name}
                                avatar={val.avatar}
                                rate={val.rate}
                                comment={val.comment} />
                        )
                    }
                    )}
                </div>
            </div>
        )
    }

}