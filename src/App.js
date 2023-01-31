import React from "react";
import GeneralInfo from "./components/general-info";
import EducationalExperience from "./components/educational-experience";
import PracticalExperience from "./components/practical-experience";

function App() {
    return (
        <div className="app">
            <div className="cv">
                <GeneralInfo />
                <div className="separator"></div>
                <EducationalExperience />
                <div className="separator"></div>
                <PracticalExperience />
            </div>
        </div>
    );
}

export default App;
