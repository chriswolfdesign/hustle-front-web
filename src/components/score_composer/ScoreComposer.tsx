import React, { ReactElement } from "react";
import "./ScoreComposer.css";

interface ScoreComposerProps {
    composer?: string;
}

function ScoreComposer({
    composer = "Unknown",
}: ScoreComposerProps): ReactElement {
    return <div className="ScoreComposer">{composer}</div>;
}

export default ScoreComposer;
