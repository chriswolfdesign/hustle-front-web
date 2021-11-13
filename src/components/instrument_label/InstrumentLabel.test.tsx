import React from "react";
import { render, screen } from "@testing-library/react";
import InstrumentLabel from "./InstrumentLabel";

test("Renders the default instrument", () => {
    render(<InstrumentLabel />);
    const label = screen.getByText(/Piano/i);
    expect(label).toBeInTheDocument();
});
