import React, { useState } from "react";

function GeneralInfo() {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [mode, setMode] = useState("edit");

    function handleSubmission(e) {
        if (nameValue === "" || emailValue === "" || numberValue === "") return;

        setMode("show");
    }

    function handleEdition(e) {
        setMode("edit");
    }

    function handleNameChange(e) {
        setNameValue(e.target.value);
    }

    function handleEmailChange(e) {
        setEmailValue(e.target.value);
    }

    function handleNumberChange(e) {
        setNumberValue(e.target.value);
    }

    if (mode === "edit") {
        return (
            <div>
                <h1 className="title">General Information</h1>
                <form className="generalinfo">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={nameValue}
                        onChange={handleNameChange}
                        required
                    ></input>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailValue}
                        onChange={handleEmailChange}
                    ></input>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                        type="number"
                        id="phonenumber"
                        value={numberValue}
                        onChange={handleNumberChange}
                    ></input>
                    <button
                        className="button"
                        type="button"
                        onClick={handleSubmission}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    } else if (mode === "show") {
        return (
            <div>
                <h1 className="title">General Information</h1>
                <form className="generalinfo">
                    <div id="name">{nameValue}</div>
                    <div id="email">{emailValue}</div>
                    <div id="phonenumber">{numberValue}</div>
                    <button className="button" onClick={handleEdition}>
                        Edit
                    </button>
                </form>
            </div>
        );
    }
}

export default GeneralInfo;
