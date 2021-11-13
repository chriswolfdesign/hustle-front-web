import React, { ReactElement } from "react";
import "./ScoreHeader.css";

interface ScoreHeaderProps {
    title?: string;
}

function ScoreHeader({ title = "Untitled" }: ScoreHeaderProps): ReactElement {
    return <div className="ScoreHeader">{title}</div>;
}

export default ScoreHeader;
