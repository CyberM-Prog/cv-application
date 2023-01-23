import React from "react";
import PracticalItems from "./practical-items";

class PracticalExperience extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
        };

        this.addForm = this.addForm.bind(this);
        
    }

    addForm() {
        this.setState((state) => ({items: state.items.concat(<PracticalItems key={this.state.items.length} />)}))
    }

    render() {
            return (
                <div className="experience">
                    <h1 className="title">Practical Experience</h1>
                    {this.state.items}
                    <button onClick={this.addForm}>Add</button>
                </div>
            );
        
        
    }
}

export default PracticalExperience;
