import React from "react";

import "./styles/reset.css";
import "./styles/index.css";

const App = ({ data }) => {
    return (
        <div className="interview">
            <h1>Fruit Selector</h1>
            <label htmlFor="fruit">Choose a fruit: </label>
            <select name="fruit" id="fruit" data-testid="fruit-select">
                <option value="one" data-testid="fruit-option">
                    One
                </option>
                <option value="two" data-testid="fruit-option">
                    Two
                </option>
                <option value="three" data-testid="fruit-option">
                    Three
                </option>
                <option value="four" data-testid="fruit-option">
                    Four
                </option>
            </select>
        </div>
    );
};

export { App };
