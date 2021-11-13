import React, { ReactElement } from "react";
import "./ScoreHeader.css";
import ScoreTitle from "../score_title/ScoreTitle";
import ScoreComposer from "../score_composer/ScoreComposer";

interface ScoreHeaderProps {
    title?: string;
}

function ScoreHeader({ title = "Untitled" }: ScoreHeaderProps): ReactElement {
    return (
        <div className="ScoreHeader">
            <ScoreTitle title={title} />
            <ScoreComposer composer="Wolf" />
        </div>
    );
}

export default ScoreHeader;
