import React from "react";
import ReactLogo from "../assets/react.svg";

function Navbar(props) {
    return (
        <nav className={props.darkMode ? "navbar navbar-dark" : "navbar navbar-light"}>
            <div className="nav-logo">
                <img src={ReactLogo} alt="React-logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className={props.darkMode ? "toggler toggler-dark" : "toggler toggler-light"}>
                <p className="toggler-lightText">Light</p>
                <div
                    className={props.darkMode ? "toggler-slider toggler-slider-dark" : "toggler-slider toggler-slider-light"}
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-darkText">Dark</p>
            </div>
        </nav>
    );
}

export default Navbar;
