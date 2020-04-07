import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';

export default class DetailRow extends Component {
    render() {
        return (
            <div className="on-top-screen">
                <div className="detail2-view">
                    <div className="pad-left">
                        <button className="mb-2 mr-2 btn btn-secondary" onClick={() => this.props.close()}>Close</button>
                    </div>

                    <h2>Detail Information</h2>
                    <Table className="mb-0">
                        <tr>
                            <th className="card-title" colSpan="2">
                                <img width="70px" className="rounded-circle avatar-big" src={this.props.avatar} />
                                {this.props.fullname}
                            </th>
                            <th></th>
                        </tr>

                        <tbody className="scroll-detail list-row">
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

                            <tr>
                                <th scope="row">Service:</th>
                                <td>
                                    <div className="scroll-detail1">
                                        {this.props.service.split("\n").map((item, i) => {
                                            return <p key={i}>{item}<br /></p>;
                                        })}
                                    </div>
                                </td>
                            </tr>
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
                            </tr>
                        </tbody>
                    </Table>
                    <div className="d-block text-center card-footer">
                        <button
                            className="mr-2 btn-icon btn btn-success"
                            value={this.props.id}
                            onClick={(e) => this.props.onAccept(e)}>
                            <i className="pe-7s-check btn-icon-wrapper"> </i>Accept
                        </button>
                        <button
                            className="mr-2 btn-icon btn btn-outline-danger"
                            value={this.props.id}
                            onClick={(e) => this.props.onDelete(e)}>
                            <i className="pe-7s-trash btn-icon-wrapper"> </i>Decline
                        </button>
                    </div>
                </div>
            </div>

        )
    }

}