import React, { Fragment } from 'react';
import { withRouter,Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import logo from "../../assets/utils/images/logo.png";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            error:""
        }
    }
    handleChange = (e) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    login = (e) => {
        e.preventDefault();
        if(this.state.username==="admin" && this.state.password==="admin"){
            sessionStorage.setItem("user",this.state.username);
            sessionStorage.setItem("pass",this.state.password);
            sessionStorage.setItem("is_login",true);
            
            this.props.history.push("/")
        }else{
            this.setState({
                error: "username or password are not correct!"
            });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="card-body text-center">
                    <img className="login-logo" height="90px" src={logo} />
                    <h2>LOGIN</h2>
                    <form class="login-page text-center" onSubmit={this.login} method="POST">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label for="usernameField" class="">Username:</label>
                                    </td>
                                    <td>
                                        <input name="username" id="usernameField" type="text" class="form-control" required
                                            value={this.state.username} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="passField" class="">Password:</label>
                                    </td>
                                    <td>
                                        <input name="password" id="passField" type="password" class="form-control" required
                                            value={this.state.password} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" color="red">
                                        {this.state.error}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button class="mt-1 btn btn-primary" type="submit">Login</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>


            </Fragment>
        )
    }
}

const mapStateToProp = state => ({
    colorScheme: state.ThemeOptions.colorScheme,
    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,

});

export default withRouter(connect(mapStateToProp)(Login));