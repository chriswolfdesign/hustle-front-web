import React from "react";
import { render, screen } from "@testing-library/react";
import Score from "./Score";

test("renders a default project", () => {
    const { container } = render(<Score />);
    expect(container.getElementsByClassName("ScoreHeader").length).toBe(1)
});
