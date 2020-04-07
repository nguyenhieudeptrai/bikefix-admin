import React from "react";
import Detail from "./DetailRow";

class CustomerRow extends React.Component {
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
            let { id,username, avatar, name, phone, address, status, service, star, vehicle } = this.props
            return (
                <Detail
                    id={id}
                    username={username}
                    fullname={name}
                    phone={phone}
                    avatar={avatar}
                    address={address}
                    close={this.viewDetail}
                    star={star}
                    status={status}
                    service={service}
                    vehicle={vehicle}
                />
            )
        }

    }
    render() {
        let { no, id, avatar, name, phone, address, status, vehicle } = this.props
        return (
            <tr>
                <td className="text-center text-muted">#{no}</td>
                <td>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                                <div className="widget-content-left">
                                    <img width={40} className="rounded-circle" src={avatar} alt="Avatar" />&nbsp;&nbsp;&nbsp;{name}
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">+{phone}</td>
                <td className="text-center">
                    <p>{vehicle.length}</p>
                </td>
                <td className="text-center">
                    {status == 1 ?<p className="badge badge-info">Enable</p> : <p className="badge badge-secondary">Disable</p>}
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

export default CustomerRow;
