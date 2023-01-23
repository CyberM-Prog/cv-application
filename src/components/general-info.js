import React from "react";

class GeneralInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            nameValue: "",
            emailValue: "",
            numberValue: "",
            mode: "edit",
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleEdition = this.handleEdition.bind(this);
    }

    handleSubmission(e) {
        e.preventDefault();
        this.setState({ mode: "show" });
    }

    handleEdition(e) {
        e.preventDefault();
        this.setState({ mode: "edit" });
    }

    handleNameChange(e) {
        this.setState({ nameValue: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ emailValue: e.target.value });
    }

    handleNumberChange(e) {
        this.setState({ numberValue: e.target.value });
    }

    render() {
        if (this.state.mode === "edit") {
            return (
                <div>
                    <h1 className="title">General Information</h1>
                    <form className="generalinfo">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={this.state.nameValue}
                            onChange={this.handleNameChange}
                        ></input>
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            value={this.state.emailValue}
                            onChange={this.handleEmailChange}
                        ></input>
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input
                            type="number"
                            id="phonenumber"
                            value={this.state.numberValue}
                            onChange={this.handleNumberChange}
                        ></input>
                        <button
                            className="button"
                            type="submit"
                            onClick={this.handleSubmission}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            );
        } else if (this.state.mode === "show") {
            return (
                <div>
                    <h1 className="title">General Information</h1>
                    <form className="generalinfo">
                        <div id="name">{this.state.nameValue}</div>
                        <div id="email">{this.state.emailValue}</div>
                        <div id="phonenumber">{this.state.numberValue}</div>
                        <button className="button" onClick={this.handleEdition}>
                            Edit
                        </button>
                    </form>
                </div>
            );
        }
    }
}

export default GeneralInfo;
