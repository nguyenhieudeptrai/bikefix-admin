import React from "react";
import Detail from "./DetailRow";
import { ThemeProvider } from "styled-components";

class MechanicRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isViewDetail: false
        }
    }
    viewDetail = () => {
        this.setState((prevState, props) => ({
            isViewDetail: !prevState.isViewDetail,
            ...prevState.isViewDetail
        }))
    }


    showContent = () => {
        if (this.state.isViewDetail) {
            let {id, username, avatar, name, phone, address, status, service, star } = this.props
            return (
                <Detail
                    id={id}
                    username={username}
                    fullname={name}
                    phone={phone}
                    avatar={avatar}
                    address={address}
                    close={this.viewDetail}
                    status={status}
                    star={star}
                    service={service}
                    onDelete={this.deleteUser}
                    onDisable={this.disableUser}
                />
            )
        }
    }
    disableUser=(e)=>{
        this.props.onDisable(e);
        this.setState({isViewDetail: false})
    }
    deleteUser=(e)=>{
        this.props.onDelete(e);
        this.setState({isViewDetail: false})
    }


    render() {
        let { no, id, avatar, name,username, phone, star, status } = this.props
        return (
            <tr>
                <td className="text-center text-muted">#{no}</td>
                <td>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                                <div className="widget-content-left">
                                    <img width={40} className="rounded-circle" src={avatar} alt="Avatar" />
                                </div>
                            </div>
                            <div className="widget-content-left flex2">
                                <div className="widget-heading">{name}</div>
                                <div className="widget-subheading opacity-7">{username}</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">+{phone}</td>
                <td className="text-center">{star}</td>
                <td className="text-center">
                    {status == 1 ?
                        <div className="badge badge-info">Available</div> :
                        status == 0 ?
                            <div className="badge badge-warning">Unavailable</div> :
                            <div className="badge badge-secondary">Disable</div>
                    }
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary btn-sm"
                        value={id}
                        onClick={() => this.viewDetail()}>Detail</button>
                </td>
                {this.showContent()}
            </tr>
        )
    }
}

export default MechanicRow;
