import React from "react";

class PracticalItems extends React.Component {
    constructor() {
        super();

        this.state = {
            companyName: "",
            positionTitle: "",
            mainTasks: "",
            startDate: "",
            endDate: "",
            mode: "add",
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleTasksChange = this.handleTasksChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.editItem = this.editItem.bind(this);



    }

    submitForm() {

        if (this.state.companyName === "" || this.state.positionTitle === "" || this.state.mainTasks === "" ||this.state.startDate === "" || this.state.endDate === "") return

        this.setState({ mode: "show" });

    }

    handleCompanyChange(e) {
        this.setState({ companyName: e.target.value });
    }

    handlePositionChange(e) {
        this.setState({ positionTitle: e.target.value });
    }

    handleTasksChange(e) {
        this.setState({ mainTasks: e.target.value });
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
                        <div className="experienceitems">
                            <div>Company Name: {this.state.companyName}</div>
                            <div>Position Title: {this.state.positionTitle}</div>
                            <div>Main Tasks: {this.state.mainTasks}</div>
                            <div>From: {this.state.startDate}</div>
                            <div>To: {this.state.endDate}</div>
                        </div>
                        <button onClick={this.editItem} className="itemedit">Edit</button>
                    </div>
                );
            } else if (this.state.mode === "add") {
                return (
                    <form className="inputs">
                        <label htmlFor="companyname">Company Name</label>
                        <input
                            id="companyname"
                            value={this.state.companyName}
                            onChange={this.handleCompanyChange}
                            required
                        ></input>
                        <label htmlFor="positiontitle">Position Title</label>
                        <input
                            id="positiontitle"
                            type="text"
                            value={this.state.positionTitle}
                            onChange={this.handlePositionChange}
                            required
                        ></input>
                        <label htmlFor="maintasks">Main Tasks</label>
                        <input
                            id="maintasks"
                            type="text"
                            value={this.state.mainTasks}
                            onChange={this.handleTasksChange}
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
                        <button type="button" className="itemsubmitbutton" onClick={this.submitForm}>Submit</button>

                    </form>
                );
            }

        
    }
}

export default PracticalItems