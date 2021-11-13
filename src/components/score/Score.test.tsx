import React from "react";
import { render, screen } from "@testing-library/react";
import Score from "./Score";

test("renders a default project", () => {
    render(<Score />);
    const title = screen.getByText(/Untitled/i);
    expect(title).toBeInTheDocument();
});
