import React from "react";
import EducationalItems from "./educational-items";

class EducationalExperience extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
        };

        this.addForm = this.addForm.bind(this);
    }

    addForm() {
        this.setState((state) => ({
            items: state.items.concat(
                <EducationalItems key={this.state.items.length} />
            ),
        }));
    }

    render() {
        return (
            <div className="experience">
                <h1 className="title">Educational Experience</h1>
                {this.state.items}
                <button onClick={this.addForm}>Add</button>
            </div>
        );
    }
}

export default EducationalExperience;
