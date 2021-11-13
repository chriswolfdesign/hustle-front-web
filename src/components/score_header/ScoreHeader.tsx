import React, { ReactElement } from "react";
import "./ScoreHeader.css";
import ScoreTitle from "../score_title/ScoreTitle";
import ScoreComposer from "../score_composer/ScoreComposer";

interface ScoreHeaderProps {
    title?: string;
    composer?: string;
}

function ScoreHeader({
    title = "Untitled",
    composer = "Unknown",
}: ScoreHeaderProps): ReactElement {
    return (
        <div className="ScoreHeader">
            <ScoreTitle title={title} />
            <ScoreComposer composer={composer} />
        </div>
    );
}

export default ScoreHeader;
