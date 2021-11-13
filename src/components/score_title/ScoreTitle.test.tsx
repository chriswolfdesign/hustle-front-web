import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreTitle from "./ScoreTitle";

test("renders a default score header", () => {
    render(<ScoreTitle />);
    const title = screen.getByText(/Untitled/i);
    expect(title).toBeInTheDocument();
});

test("renders a score title with a given title", () => {
    render(<ScoreTitle title="My Composition" />);
    const title = screen.getByText(/My Composition/i);
    expect(title).toBeInTheDocument();
});
