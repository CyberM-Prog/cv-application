import React, { useState } from "react";

function PracticalItems() {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [mainTasks, setMainTasks] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [mode, setMode] = useState("add");

    function submitForm() {
        if (
            companyName === "" ||
            positionTitle === "" ||
            mainTasks === "" ||
            startDate === "" ||
            endDate === ""
        )
            return;

        setMode("show");
    }

    function handleCompanyChange(e) {
        setCompanyName(e.target.value);
    }

    function handlePositionChange(e) {
        setPositionTitle(e.target.value);
    }

    function handleTasksChange(e) {
        setMainTasks(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    function editItem() {
        setMode("add");
    }

    if (mode === "show") {
        return (
            <div>
                <div className="experienceitems">
                    <div>Company Name: {companyName}</div>
                    <div>Position Title: {positionTitle}</div>
                    <div>Main Tasks: {mainTasks}</div>
                    <div>From: {startDate}</div>
                    <div>To: {endDate}</div>
                </div>
                <button onClick={editItem} className="itemedit">
                    Edit
                </button>
            </div>
        );
    } else if (mode === "add") {
        return (
            <form className="inputs">
                <label htmlFor="companyname">Company Name</label>
                <input
                    id="companyname"
                    value={companyName}
                    onChange={handleCompanyChange}
                    required
                ></input>
                <label htmlFor="positiontitle">Position Title</label>
                <input
                    id="positiontitle"
                    type="text"
                    value={positionTitle}
                    onChange={handlePositionChange}
                    required
                ></input>
                <label htmlFor="maintasks">Main Tasks</label>
                <input
                    id="maintasks"
                    type="text"
                    value={mainTasks}
                    onChange={handleTasksChange}
                    required
                ></input>
                <label htmlFor="startdate">Start Date</label>
                <input
                    id="startdate"
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    required
                ></input>
                <label htmlFor="enddate">End Date</label>
                <input
                    id="enddate"
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    required
                ></input>
                <button
                    type="button"
                    className="itemsubmitbutton"
                    onClick={submitForm}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default PracticalItems;
