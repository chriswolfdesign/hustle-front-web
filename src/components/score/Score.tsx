import React, { ReactElement } from "react";
import "./Score.css";
import ScoreHeader from "../score_header/ScoreHeader";
import Part from "../part/Part";

function Score(): ReactElement {
    return (
        <div className="Score">
            <ScoreHeader title="My Composition" composer="Wolf" />
            <Part />
        </div>
    );
}

export default Score;
