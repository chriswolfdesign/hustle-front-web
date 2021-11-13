import React, { ReactElement } from "react";
import "./ScoreTitle.css";

interface ScoreTitleProps {
    title?: string;
}

function ScoreTitle({ title = "Untitled" }: ScoreTitleProps): ReactElement {
    return <div className="ScoreTitle">{title}</div>;
}

export default ScoreTitle;
