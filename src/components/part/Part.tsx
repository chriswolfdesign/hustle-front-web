import React, { ReactElement } from "react";
import "./Part.css";
import Staff from "../staff/Staff";
import InstrumentLabel from "../instrument_label/InstrumentLabel";

function Part(): ReactElement {
    return (
        <div className="Part">
            <InstrumentLabel />
            <Staff />
        </div>
    );
}

export default Part;
