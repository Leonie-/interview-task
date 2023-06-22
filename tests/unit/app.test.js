import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";

import { App } from "../../src/app";

describe("Metrics", () => {
    test("shows single dropdown", async () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("uploader")).toBeTruthy();
    });
});
