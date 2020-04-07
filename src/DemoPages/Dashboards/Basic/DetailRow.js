import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';

import star from "../../../assets/utils/images/star.png";
import unstar from "../../../assets/utils/images/unstar.png";
import ListComment from "./ListComment"

export default class DetailRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewComment: false
        }
    }

    openComment = () => {
        this.setState({
            isViewComment: true
        })
    }

    showComment = () => {
        if (this.state.isViewComment) {
            return (
                <ListComment />
            )
        }
    }
    render() {
        const starImg = [];
        let isEnd = false;
        for (let i = 0; i < 5; i++) {
            if (i == (this.props.star - 0).toFixed()) {
                isEnd = true;
            }
            if (isEnd) {
                starImg.push(<img key={i} width={30} src={unstar} />);
            } else {
                starImg.push(<img key={i} width={30} src={star} />);
            }
        }
        console.log(this.props.status == -1);
        return (
            <div className="on-top-screen">
                <div className="detail-view">
                    <div className="pad-left">
                        <button className="mb-2 mr-2 btn btn-secondary" onClick={() => this.props.close()}>Close</button>
                    </div>
                    <div className={(this.state.isViewComment ? "haft-div" : "full-div") + " div-left-detail div-tab"}>

                        <h2>Detail Information</h2>
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th className="card-title" colSpan="2">
                                        <img width="70px" className="rounded-circle avatar-big" src={this.props.avatar} />
                                        {this.props.fullname}
                                    </th>
                                </tr>

                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">Username:</th>
                                    <td>{this.props.username}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone:</th>
                                    <td>+{this.props.phone}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address:</th>
                                    <td>{this.props.address}</td>
                                </tr>
                                {typeof (this.props.vehicle) == "undefined" ?
                                    <tr>
                                        <th scope="row">Rating:</th>
                                        <td className="pos-relative">{starImg}
                                            <button className="btn btn-info in-right" onClick={() => this.openComment()}>View comment</button></td>
                                    </tr> :
                                    <tr>
                                        <th scope="row">Vehicle(s):</th>
                                        <th >
                                            {this.props.vehicle.map((item, i) => {
                                                return <p key={i}>{item}<br /></p>;
                                            })}
                                        </th>
                                    </tr>
                                }

                                {typeof (this.props.vehicle) == "undefined" ?
                                    <tr>
                                        <th scope="row">Service:</th>
                                        <td>
                                            <div className="scroll-detail1">
                                                {this.props.service.split("\n").map((item, i) => {
                                                    return <p key={i}>{item}<br /></p>;
                                                })}
                                            </div>
                                        </td>
                                    </tr> : ""
                                }
                                {typeof (this.props.vehicle) == "undefined" ?
                                    <tr>
                                        <th scope="row">Store Image:</th>
                                        <td >
                                            <div className="scroll-detail2">
                                                <div>
                                                    <p>Identification Card:</p>
                                                    <img className="img-store" width="250" src="/images/cmnd.jpg" />
                                                </div>
                                                <div>
                                                    <p>Store Image:</p>
                                                    <img className="img-store" width="150" src="/images/i1.jpg" />
                                                    <img className="img-store" width="150" src="/images/i2.jpg" />
                                                </div>
                                                <div>
                                                    <p>Identification Card:</p>
                                                    <img className="img-store" width="250" src="/images/lie.jpg" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr> : ""
                                }

                            </tbody>
                        </Table>
                    </div>
                    <div className="div-right-detail div-tab">
                        {this.showComment()}
                    </div>
                    <div className="d-block text-center card-footer">
                        {typeof (this.props.vehicle) == "undefined" ?
                            <button
                                className={(this.props.status == -1 ? "btn-success" : "btn-secondary") + " btn-wide btn"}
                                value={this.props.id}
                                onClick={(e) => this.props.onDisable(e)}>
                                {(this.props.status == -1 ? "Enable" : "Disable")}
                            </button> :
                            <button
                                className={(this.props.status == 0 ? "btn-success" : "btn-secondary") + " btn-wide btn"}
                                value={this.props.id}
                                onClick={(e) => this.props.onDisable(e)}>
                                {(this.props.status == 0 ? "Enable" : "Disable")}
                            </button>
                        }
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {typeof (this.props.vehicle) == "undefined" ?
                            <button
                                className="btn-wide btn btn-danger"
                                value={this.props.id}
                                onClick={(e) => this.props.onDelete(e)}>
                                Remove
                            </button> : ""
                        }
                    </div>
                </div>
            </div>

        )
    }

}