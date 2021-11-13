import React, { ReactElement } from "react";
import "./App.css";
import Score from "./components/score/Score";

function App(): ReactElement {
    return (
        <div className="App">
            <Score />
        </div>
    );
}

export default App;
