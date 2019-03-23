import React, { Component } from "react";
import LoginContainer from "../login/style/LoginContainer";
import LoginWindow from "../login/style/LoginWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailInput from "../login/style/EmailInput";
import PasswordInput from "../login/style/PasswordInput";

class LoginBar extends Component {
    state = {
        login: "close"
    };
    toggleLogin = () => {
        if (this.state.login === "close") {
            return this.setState({ login: "open" });
        } else if (this.state.login === "open") {
            return this.setState({ login: "close" });
        }
    };
    render() {
        const { login } = this.state;
        return (
            <React.Fragment>
                <LoginContainer style={loginStyle}>
                    <a href="# " onClick={() => this.toggleLogin()}>
                        <FontAwesomeIcon icon="angle-right" /> Login
                    </a>{" "}
                    or <a href="# ">Register</a> to enjoy the benefits of our
                    site !
                </LoginContainer>
                <LoginWindow login={login} style={loginPopUp}>
                    <FontAwesomeIcon
                        className="lock"
                        icon="lock"
                        style={{ color: "#53b8c4" }}
                    />
                    <form>
                        <EmailInput />
                        <PasswordInput />
                    </form>
                    <span>
                        <FontAwesomeIcon
                            icon="angle-right"
                            style={{ color: "#fff" }}
                        />{" "}
                        GO
                    </span>
                </LoginWindow>
            </React.Fragment>
        );
    }
}

const loginStyle = {
    position: "absolute",
    right: 0,
    background: "#8c8c8c",
    opacity: "0.7",
    zIndex: "5",
    width: "25rem"
};

const loginPopUp = {
    margin: "0",
    right: "0",
    left: "auto",
    top: "3rem"
};

export default LoginBar;
