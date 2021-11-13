import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreComposer from "./ScoreComposer";

test("renders a default score composer", () => {
    render(<ScoreComposer />);
    const composer = screen.getByText(/Unknown/i);
    expect(composer).toBeInTheDocument();
});
