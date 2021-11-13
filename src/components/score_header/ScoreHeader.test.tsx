import React from "react";
import { render } from "@testing-library/react";
import ScoreHeader from "./ScoreHeader";

test("Contains a ScoreTitle", () => {
    const { container } = render(<ScoreHeader />);
    expect(container.getElementsByClassName("ScoreTitle").length).toBe(1);
});

test("Contains a Score Composer", () => {
    const { container } = render(<ScoreHeader />);
    expect(container.getElementsByClassName("ScoreComposer").length).toBe(1);
});
