import React from "react";
import { render } from "@testing-library/react";
import Part from "./Part";

test("Contains an InstrumentLabel", () => {
    const { container } = render(<Part />);
    expect(container.getElementsByClassName("InstrumentLabel").length).toBe(1);
});
