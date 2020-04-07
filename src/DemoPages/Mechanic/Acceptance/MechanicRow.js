import React from "react";
import Detail from "./DetailRow";

class MechanicRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isViewDetail: false
        }
    }
    viewDetail = () => {
        let view = this.state.isViewDetail;
        this.setState({
            isViewDetail: !view
        })
    }

    showContent = () => {
        if (this.state.isViewDetail) {
            let { id, username, avatar, name, phone, address, service } = this.props
            return (
                <Detail
                    id={id}
                    username={username}
                    fullname={name}
                    phone={phone}
                    avatar={avatar}
                    address={address}
                    close={this.viewDetail}
                    service={service}
                    onDelete={this.deleteUser}
                    onAccept={this.acceptUser}
                />
            )
        }
    }
    deleteUser = (e) => {
        this.props.onDelete(e);
        this.setState({ isViewDetail: false })
    }

    acceptUser = (e) => {
        this.props.onAccept(e);
        this.setState({ isViewDetail: false })
    }
    render() {
        let { no, id,username, avatar, name, phone, address,createdAt } = this.props
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
                <td className="text-center">{createdAt[0]+"/"+createdAt[1]+"/"+createdAt[2]}</td>
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
