import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreHeader from "./ScoreHeader";

test("renders a default score header", () => {
    render(<ScoreHeader />);
    const title = screen.getByText(/Untitled/i);
    expect(title).toBeInTheDocument();
});
