import React from "react";

class EducationalItems extends React.Component {
    constructor() {
        super();

        this.state = {
            schoolTitle: "",
            studyTitle: "",
            startDate: "",
            endDate: "",
            mode: "add",
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleStudyChange = this.handleStudyChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.editItem = this.editItem.bind(this);



    }

    submitForm() {

        if (this.state.schoolTitle === "" || this.state.studyTitle === "" || this.state.startDate === "" || this.state.endDate === "") return

        this.setState({ mode: "show" });
        /*this.setState((state) => ({
            items: state.items.concat([
                <div className="educationitems">
                    <div>School Title: {state.schoolTitle}</div>
                    <div>Study Title: {state.studyTitle}</div>
                    <div>From: {state.startDate}</div>
                    <div>To: {state.endDate}</div>
                </div>,
            ]),
        }));*/
    }

    handleSchoolChange(e) {
        this.setState({ schoolTitle: e.target.value });
    }

    handleStudyChange(e) {
        this.setState({ studyTitle: e.target.value });
    }

    handleStartDateChange(e) {
        this.setState({ startDate: e.target.value });
    }

    handleEndDateChange(e) {
        this.setState({ endDate: e.target.value });
    }

    editItem() {
        this.setState({ mode: "add" });
    }

    render() {

            if (this.state.mode === "show") {
                return (
                    <div>
                        <div className="educationitems">
                            <div>School Title: {this.state.schoolTitle}</div>
                            <div>Study Title: {this.state.studyTitle}</div>
                            <div>From: {this.state.startDate}</div>
                            <div>To: {this.state.endDate}</div>
                        </div>
                        <button onClick={this.editItem} className="educationaledit">Edit</button>
                    </div>
                );
            } else if (this.state.mode === "add") {
                return (
                    <form className="inputs">
                        <label htmlFor="schooltitle">School Title</label>
                        <input
                            id="schooltitle"
                            value={this.state.schoolTitle}
                            onChange={this.handleSchoolChange}
                            required
                        ></input>
                        <label htmlFor="studytitle">Title Of Study</label>
                        <input
                            id="studytitle"
                            type="text"
                            value={this.state.studyTitle}
                            onChange={this.handleStudyChange}
                            required
                        ></input>
                        <label htmlFor="startdate">Start Date</label>
                        <input
                            id="startdate"
                            type="date"
                            value={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            required
                        ></input>
                        <label htmlFor="enddate">End Date</label>
                        <input
                            id="enddate"
                            type="date"
                            value={this.state.endDate}
                            onChange={this.handleEndDateChange}
                            required
                        ></input>
                        <button type="button" className="educationalbutton" onClick={this.submitForm}>Submit</button>

                    </form>
                );
            }

        
    }
}

export default EducationalItems