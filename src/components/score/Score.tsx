import React, { ReactElement } from "react";
import "./Score.css";
import ScoreHeader from "../score_header/ScoreHeader";

function Score(): ReactElement {
    return (
        <div className="Score">
            <ScoreHeader title="My Composition" composer="Wolf" />
        </div>
    );
}

export default Score;
