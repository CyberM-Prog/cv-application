import React, { useState } from "react";
import EducationalItems from "./educational-items";

function EducationalExperience() {
    const [items, setItems] = useState([]);

    function addForm() {
        setItems(items.concat(<EducationalItems key={items.length} />));
    }

    return (
        <div className="experience">
            <h1 className="title">Educational Experience</h1>
            {items}
            <button onClick={addForm}>Add</button>
        </div>
    );
}

export default EducationalExperience;
