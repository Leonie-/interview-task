import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";

import { App } from "../../src/app";

describe("Metrics", () => {
    test("shows single dropdown with options", async () => {
        const { queryAllByTestId } = render(<App />);
        expect(queryAllByTestId("fruit-select").length).toBe(1);
        expect(queryAllByTestId("fruit-option").length).toBe(4);
    });

    test("renders correctly", async () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});
