import React, { useState } from "react";
import PracticalItems from "./practical-items";

function PracticalExperience() {
    const [items, setItems] = useState([]);

    function addForm() {
        setItems(items.concat(<PracticalItems key={items.length} />));
    }

    return (
        <div className="experience">
            <h1 className="title">Practical Experience</h1>
            {items}
            <button onClick={addForm}>Add</button>
        </div>
    );
}

export default PracticalExperience;
