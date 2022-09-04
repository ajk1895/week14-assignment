import React, { Component} from "react";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Movie reviews</span>
                    </div>
                </nav>
            </div>
        )
    }
}