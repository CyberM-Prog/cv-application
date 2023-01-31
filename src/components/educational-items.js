import React, { useState } from "react";

function EducationalItems() {
    const [schoolTitle, setSchoolTitle] = useState("");
    const [studyTitle, setStudyTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [mode, setMode] = useState("add");

    function submitForm() {
        if (
            schoolTitle === "" ||
            studyTitle === "" ||
            startDate === "" ||
            endDate === ""
        )
            return;

        setMode("show");
    }

    function handleSchoolChange(e) {
        setSchoolTitle(e.target.value);
    }

    function handleStudyChange(e) {
        setStudyTitle(e.target.value);
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
                    <div>School Title: {schoolTitle}</div>
                    <div>Study Title: {studyTitle}</div>
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
                <label htmlFor="schooltitle">School Title</label>
                <input
                    id="schooltitle"
                    value={schoolTitle}
                    onChange={handleSchoolChange}
                    required
                ></input>
                <label htmlFor="studytitle">Title Of Study</label>
                <input
                    id="studytitle"
                    type="text"
                    value={studyTitle}
                    onChange={handleStudyChange}
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

export default EducationalItems;
