import React from "react";
import { render } from "@testing-library/react";
import Score from "./Score";

test("Has a Score Header", () => {
    const { container } = render(<Score />);
    expect(container.getElementsByClassName("ScoreHeader").length).toBe(1);
});

test("Has a single part", () => {
    const { container } = render(<Score />);
    expect(container.getElementsByClassName("Part").length).toBe(1);
});
