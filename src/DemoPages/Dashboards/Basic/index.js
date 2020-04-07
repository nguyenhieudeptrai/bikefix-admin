import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import MechanicRow from "./MechanicRow";
import CustomerRow from "./CustomerRow";

import { src1, src2 } from './Src/src';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';
import avatar5 from '../../../assets/utils/images/avatars/5.jpg';
import avatar11 from '../../../assets/utils/images/avatars/11.jpg';
import avatar8 from '../../../assets/utils/images/avatars/8.jpg';
import avatar9 from '../../../assets/utils/images/avatars/9.jpg';
import avatar10 from '../../../assets/utils/images/avatars/10.jpg';



export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            typeMechanic: true,
            src: [],
            tmpSrc: [],
            data: {
                currentPage: 1,
                totalPages: 1,
            },
            filterPosStatus: 1,
            filterPosStar: 0,
            maxItemInPage: 8,
            search: ""
        };

    }
    changeUserType = (type) => {
        this.getUser(type);
    }
    filterStatusClick = (e) => {
        let { value } = e.target;
        value = value - 0;
        this.search2(this.state.filterPosStar, value);
    }
    filterStarClick = (e) => {
        let { value } = e.target;
        value = value - 0;
        this.search2(value, this.state.filterPosStatus);
    }
    filter = (orsrc, src, star, status, type) => {
        let newTmpSrc = [];
        if (type) {
            for (let i = 0; i < src.length; i++) {
                const el = src[i];
                switch (status) {
                    case 0:
                        newTmpSrc.push(el);
                        break;
                    case 1:
                        if (el.status == 1) {
                            newTmpSrc.push(el);
                        }
                        break;
                    case 2:
                        if (el.status == 0) {
                            newTmpSrc.push(el);
                        }
                        break;
                    case 3:
                        if (el.status == -1) {
                            newTmpSrc.push(el);
                        }
                        break;
                }
            }
            let newTmpSrc2 = [];
            for (let i = 0; i < newTmpSrc.length; i++) {
                const el = newTmpSrc[i];
                let elStar = el.star - 0;
                if (star == 0) {
                    newTmpSrc2.push(el);
                } else {
                    if (star == 1 && elStar >= 1 && elStar <= 2) { newTmpSrc2.push(el); }
                    else if (star == 2 && elStar >= 2 && elStar <= 3) { newTmpSrc2.push(el); }
                    else if (star == 3 && elStar >= 3 && elStar <= 4) { newTmpSrc2.push(el); }
                    else if (star == 4 && elStar >= 4 && elStar <= 5.0) { newTmpSrc2.push(el); }
                }
            }
            this.countPage(orsrc, newTmpSrc2, star, status, type);
        } else {
            for (let i = 0; i < src.length; i++) {
                const el = src[i];
                switch (status) {
                    case 0:
                        newTmpSrc.push(el);
                        break;
                    case 1:
                        if (el.status == 1) {
                            newTmpSrc.push(el);
                        }
                        break;
                    case 2:
                        if (el.status == 0) {
                            newTmpSrc.push(el);
                        }
                        break;
                }
            }
            this.countPage(orsrc, newTmpSrc, 0, status);
        }
    }
    countPage = (orsrc, src, star, status, type) => {
        let total = Math.ceil(src.length / this.state.maxItemInPage);
        this.setState({
            data: {
                currentPage: 1,
                totalPages: total
            },
            filterPosStatus: status,
            filterPosStar: star,
            tmpSrc: src,
            src: orsrc,
            typeMechanic: type
        });
    }
    getUser = (isMechanic) => {
        let src;
        if (isMechanic) {
            src = src1;
            this.search(src, 0, 1, isMechanic)
        } else {
            src = src2;
            this.search(src, 0, 0, isMechanic)
        }
    }
    removeUser = (e) => {
        let { value } = e.target;
        var r = confirm("Are you sure you want to delete this person?");
        if (r == true) {
            let newData1 = this.state.src.filter(item => item.id !== value);
            let newData2 = this.state.tmpSrc.filter(item => item.id !== value);
            this.countPage(newData1, newData2, this.state.filterPosStar, this.state.filterPosStatus, this.state.typeMechanic);
        }
    }
    disableUser = (e) => {
        let { value } = e.target;
        console.log(e);
        let newData1 = this.state.src;
        let index = newData1.findIndex((obj => obj.id == value));
        if (this.state.typeMechanic) {
            if (newData1[index].status == -1) {
                newData1[index].status == 0;
            } else {
                newData1[index].status == -1;
            }
        } else {
            if (newData1[index].status == 1) {
                newData1[index].status == 0;
            } else {
                newData1[index].status == 1;
            }
        }
        let newData2 = this.state.tmpSrc;
        index = newData2.findIndex((obj => obj.id == value))
        if (this.state.typeMechanic) {
            if (newData2[index].status == -1) {
                newData2[index].status = 0;
            } else {
                newData2[index].status = -1;
            }
        } else {
            if (newData2[index].status == 1) {
                newData2[index].status = 0;
            } else {
                newData2[index].status = 1;
            }
        }
        this.countPage(newData1, newData2, this.state.filterPosStar, this.state.filterPosStatus, this.state.typeMechanic);
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

    search = (src, star, status, type) => {
        let newTmpSrc = [];
        for (let i = 0; i < src.length; i++) {
            const el = src[i];
            if (el.phone.includes(this.state.search)
                || el.name.includes(this.state.search)
                || el.username.includes(this.state.search)) {
                newTmpSrc.push(el);
            }
        }
        this.filter(src, newTmpSrc, star, status, type);
    }

    search2 = (star, status) => {
        let newTmpSrc = [];
        for (let i = 0; i < this.state.src.length; i++) {
            const el = this.state.src[i];
            if (el.phone.includes(this.state.search)
                || el.name.includes(this.state.search)
                || el.username.includes(this.state.search)) {
                newTmpSrc.push(el);
            }
        }
        this.filter(this.state.src, newTmpSrc, star, status, this.state.typeMechanic);
    }
    componentWillMount() {
        this.getUser(this.state.typeMechanic);
    }
    render() {
        var startIndex = (this.state.data.currentPage - 1) * this.state.maxItemInPage;
        var endIndex = Math.min(startIndex + this.state.maxItemInPage - 1, this.state.tmpSrc.length - 1);
        var optionStatus = ["All", "Available", "Unavailable", "Disable"]
        var optionStar = ["All", "1 - 2", "2 - 3", "3 - 4", "4 - 5"];
        var optionStatusCus = ["All", "Enable", "Disable"];
        var src = this.state.tmpSrc;
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
                                    <div className="card-header">User
                                        <div className="gap-left btn-group">
                                            <input
                                                placeholder="Search name, phone,..."
                                                type="search"
                                                className="form-control-sm form-control"
                                                onChange={(e) => this.handleSearch(e)} />
                                            <button className="btn btn-primary" onClick={() => this.search2(0, 1)}>Search</button>
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <button className={"btn btn-info " + (this.state.typeMechanic ? "active" : "")} onClick={() => this.changeUserType(true)}>Mechanic</button>
                                            <button className={"btn btn-info " + (this.state.typeMechanic ? "" : "active")} onClick={() => this.changeUserType(false)}>Customer</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center w-10">#</th>
                                                    <th className="w-25">Name</th>
                                                    <th className="text-center">Phone Number</th>
                                                    {this.state.typeMechanic ?
                                                        <th className="text-center">Rating<br />
                                                            <select className="form-control" onChange={(e) => this.filterStarClick(e)}>
                                                                {optionStar.map((val, index) => {
                                                                    if (this.state.filterPosStar == index) {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={index}
                                                                                selected
                                                                            >
                                                                                {val}
                                                                            </option>
                                                                        )
                                                                    }
                                                                    return (
                                                                        <option
                                                                            key={index}
                                                                            value={index}>
                                                                            {val}
                                                                        </option>
                                                                    )
                                                                })
                                                                }
                                                            </select>
                                                        </th> : ""}
                                                    {this.state.typeMechanic ?
                                                        <th className="text-center">Status<br />
                                                            <select className="form-control" onChange={(e) => this.filterStatusClick(e)}>
                                                                {optionStatus.map((val, index) => {
                                                                    if (this.state.filterPosStatus == index) {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={index}
                                                                                selected
                                                                            >
                                                                                {val}
                                                                            </option>
                                                                        )
                                                                    }
                                                                    return (
                                                                        <option
                                                                            key={index}
                                                                            value={index}>
                                                                            {val}
                                                                        </option>
                                                                    )
                                                                })
                                                                }
                                                            </select>
                                                        </th> :
                                                        <th className="text-center">Number of Vehicles</th>}

                                                    {!this.state.typeMechanic ?
                                                        // for cus
                                                        <th className="text-center">Status<br />
                                                            <select className="form-control" onChange={(e) => this.filterStatusClick(e)}>
                                                                {optionStatusCus.map((val, index) => {
                                                                    if (this.state.filterPosStatus == index) {
                                                                        return (
                                                                            <option
                                                                                key={index}
                                                                                value={index}
                                                                                selected
                                                                            >
                                                                                {val}
                                                                            </option>
                                                                        )
                                                                    }
                                                                    return (
                                                                        <option
                                                                            key={index}
                                                                            value={index}>
                                                                            {val}
                                                                        </option>
                                                                    )
                                                                })
                                                                }
                                                            </select></th> :
                                                        ""}
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            {this.state.typeMechanic ?
                                                <tbody>
                                                    {src.map((val, index) => {
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
                                                                    status={val.status}
                                                                    star={val.star}
                                                                    service={val.service}
                                                                    onDelete={this.removeUser}
                                                                    onDisable={this.disableUser}
                                                                />
                                                            )
                                                        }
                                                    }
                                                    )}
                                                </tbody> :
                                                <tbody>
                                                    {src.map((val, index) => {
                                                        if (index >= startIndex && index <= endIndex) {
                                                            return (
                                                                <CustomerRow
                                                                    key={index}
                                                                    no={index + 1}
                                                                    id={val.id}
                                                                    username={val.username}
                                                                    name={val.name}
                                                                    avatar={val.avatar}
                                                                    phone={val.phone}
                                                                    address={val.address}
                                                                    status={val.status}
                                                                    vehicle={val.vehicle}
                                                                    onDelete={this.removeUser}
                                                                />
                                                            )
                                                        }
                                                    })
                                                    }

                                                </tbody>}
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
