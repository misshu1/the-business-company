import React, { Component } from "react";
import LogoApp from "./components/logo/LogoApp";
import LoginApp from "./components/login/LoginApp";
import ShowcaseApp from "./components/showcase/ShowcaseApp";
import SwapOrder from "./components/style/SwapOrder";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faLock,
    faAngleRight,
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import WidgetsApp from "./components/widgets/WidgetsApp";
import AboutUsApp from "./components/aboutUs/AboutUsApp";

library.add(faLock, faAngleRight, faAngleLeft);
class App extends Component {
    render() {
        return (
            <React.Fragment>
                {window.matchMedia("(max-width: 63.74rem)").matches ? (
                    <LoginApp />
                ) : (
                    ""
                )}
                <SwapOrder>
                    <LogoApp />
                    <ShowcaseApp />
                </SwapOrder>
                <WidgetsApp />
                <AboutUsApp />
            </React.Fragment>
        );
    }
}

export default App;
