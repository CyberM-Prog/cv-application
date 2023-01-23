import React from "react";
import EducationalItems from "./educational-items";

class EducationalExperience extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
        };

        this.addForm = this.addForm.bind(this);
        
    }

    addForm() {
        this.setState((state) => ({items: state.items.concat(<EducationalItems/>)}))
    }

    render() {
            return (
                <div className="education">
                    <h1 className="educationaltitle">Educational Experience</h1>
                    {this.state.items}
                    <button onClick={this.addForm}>Add</button>
                </div>
            );
        
        
    }
}

export default EducationalExperience;
