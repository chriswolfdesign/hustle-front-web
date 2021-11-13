import React, { ReactElement } from "react";
import "./ScoreHeader.css";
import ScoreTitle from "../score_title/ScoreTitle";

interface ScoreHeaderProps {
    title?: string;
}

function ScoreHeader({ title = "Untitled" }: ScoreHeaderProps): ReactElement {
    return (
        <div className="ScoreHeader">
            <ScoreTitle title={title} />
        </div>
    );
}

export default ScoreHeader;
