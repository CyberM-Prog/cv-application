import React from "react";
import GeneralInfo from "./components/general-info";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="cv">
                    <GeneralInfo />
                </div>
            </div>
        );
    }
}

export default App;
