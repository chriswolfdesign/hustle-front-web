import React from "react";
import { render } from "@testing-library/react";
import Part from "./Part";

test("Contains an InstrumentLabel", () => {
    const { container } = render(<Part />);
    expect(container.getElementsByClassName("InstrumentLabel").length).toBe(1);
});

test("Contains a Staff", () => {
    const { container } = render(<Part />);
    expect(container.getElementsByClassName("Part").length).toBe(1);
});
