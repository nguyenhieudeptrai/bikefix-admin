import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card,
} from 'reactstrap';

import MechanicRow from "./MechanicRow";
import { src } from "./Src/src";

export default class MechanicsDashboard extends Component {
    constructor() {
        super();

        this.state = {
            src: [],
            tmpSrc: [],
            data: {
                currentPage: 1,
                totalPages: 1,
            },
            maxItemInPage: 8,
            search: "",
            isAscending: true
        };

    }
    getUser = (isMechanic) => {
        let mec = src;
        this.setState({
            src: mec,
            tmpSrc: mec
        });
        this.countPage(mec);
    }
    countPage = (data) => {
        let total = Math.ceil(data.length / this.state.maxItemInPage);
        this.setState({
            data: {
                currentPage: 1,
                totalPages: total
            },
            tmpSrc: data
        });
    }

    removeUser = (e) => {
        let { value } = e.target;
        var r = confirm("Are you sure you want to decline this person?\nInfomations will be not saved.");
        if (r == true) {
            let newData = this.state.src.filter(item => item.id !== value);
            this.setState({
                src: newData,
                searchRs: newData
            });
            this.countPage(newData);
        }
    }
    acceptUser = (e) => {
        let { value } = e.target;
        console.log(e);
        let newData = this.state.src.filter(item => item.id !== value);
        this.setState({
            src: newData,
            searchRs: newData
        });
        this.countPage(newData);
    }
    nextPage = () => {
        let currentPage = this.state.data.currentPage;
        let total = this.state.data.totalPages;
        if (currentPage >= 1 && currentPage < total) {
            this.setState(prev => ({
                data: {
                    currentPage: prev.data.currentPage + 1,
                    totalPages: prev.data.totalPages
                }
            }))
        }
    }
    prevPage = () => {
        let currentPage = this.state.data.currentPage;
        let total = this.state.data.totalPages;
        if (currentPage > 1 && currentPage <= total) {
            this.setState(prev => ({
                data: {
                    currentPage: prev.data.currentPage - 1,
                    totalPages: prev.data.totalPages
                },
                ...prev.data
            }))
        }
    }
    handleSearch = (e) => {
        let { value } = e.target;
        this.setState({ search: value });
    }
    handleSort = () => {
        let isAsc = this.state.isAscending;
        let array = this.state.tmpSrc;
        array.sort(function (a, b) {
            let m1 = a.createdAt;
            let m2 = b.createdAt;
            if (isAsc) {
                return new Date(m1[2], m1[1], m1[0]) - new Date(m2[2], m2[1], m2[0]);
            } else {
                return new Date(m2[2], m2[1], m2[0]) - new Date(m1[2], m1[1], m1[0]);
            }
        });
        this.setState({
            isAscending: !isAsc,
            tmpSrc: array
        })
    }
    search = () => {
        let newTmpSrc = [];
        for (let i = 0; i < this.state.src.length; i++) {
            const el = this.state.src[i];
            if (el.phone.includes(this.state.search) || el.name.includes(this.state.search)) {
                newTmpSrc.push(el);
            }
        }
        this.countPage(newTmpSrc);
    }
    componentWillMount() {
        this.getUser();
    }
    render() {
        let vehicle = ["Yamaha 150cc", "Honda Dream II"];
        var startIndex = (this.state.data.currentPage - 1) * this.state.maxItemInPage;
        var endIndex = Math.min(startIndex + this.state.maxItemInPage - 1, this.state.tmpSrc.length - 1);
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="card-header">Mechanic
                                        <div className="gap-left btn-group">
                                            <input
                                                placeholder="Search mechannic"
                                                type="search"
                                                className="form-control-sm form-control"
                                                onChange={(e) => this.handleSearch(e)} />
                                            <button className="btn btn-primary" onClick={() => this.search()}>Search</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center w-10">#</th>
                                                    <th>Name</th>
                                                    <th className="text-center">Phone Number</th>
                                                    <th
                                                        className="text-center"
                                                        onClick={() => this.handleSort()}>Request Date
                                                        <i className={(this.state.isAscending?"pe-7s-angle-up":"pe-7s-angle-down")+ " black"}></i>
                                                    </th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.tmpSrc.map((val, index) => {
                                                    if (index >= startIndex && index <= endIndex) {
                                                        return (
                                                            <MechanicRow
                                                                key={index}
                                                                no={index + 1}
                                                                id={val.id}
                                                                username={val.username}
                                                                name={val.name}
                                                                avatar={val.avatar}
                                                                phone={val.phone}
                                                                address={val.address}
                                                                service={val.service}
                                                                createdAt={val.createdAt}
                                                                onDelete={this.removeUser}
                                                                onAccept={this.acceptUser} />
                                                        )
                                                    }
                                                }
                                                )}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="5" className="paging-part">
                                                        <div className="btn-group">
                                                            <button
                                                                className="btn btn-info"
                                                                onClick={() => this.prevPage()} >{"<"}</button>
                                                            <input
                                                                className="form-control-sm form-control paging"
                                                                type="number"
                                                                value={this.state.data.currentPage}
                                                                min="1"
                                                                max={this.state.data.totalPages} />
                                                            <div className="p-center">/</div>
                                                            <input
                                                                className="form-control-sm form-control paging"
                                                                value={this.state.data.totalPages}
                                                                disabled={true} />
                                                            <button
                                                                className="btn btn-info"
                                                                onClick={() => this.nextPage()}>{">"}</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
