import React, { ReactElement } from "react";
import "./Part.css";
import InstrumentLabel from "../instrument_label/InstrumentLabel";

function Part(): ReactElement {
    return (
        <div className="Part">
            <InstrumentLabel />
        </div>
    );
}

export default Part;
