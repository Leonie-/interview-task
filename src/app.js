import React from "react";

import "./styles/reset.css";
import "./styles/index.css";

const App = ({ data }) => {
    return (
        <div className="interview">
            <h1>Fruit Selector</h1>
            <div className="fruit">
                <label htmlFor="fruit">Choose a fruit: </label>
                <select name="fruit" className="fruit-select" id="fruit" data-testid="fruit-select">
                    <option value="one" data-testid="fruit-option">
                        Apples
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
                &nbsp;&nbsp;
                <label htmlFor="fruit">Choose a variety: </label>
                <select name="fruit" className="fruit-select" id="fruit" data-testid="fruit-select">
                    <option value="one" data-testid="fruit-option">
                        Fuji
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
                <a href="" className="remove">
                    Remove fruit
                </a>
            </div>
            <div className="fruit">
                <label htmlFor="fruit">Choose a fruit: </label>
                <select name="fruit" className="fruit-select" id="fruit" data-testid="fruit-select">
                    <option value="one" data-testid="fruit-option">
                        Bananas
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
                &nbsp;&nbsp;
                <label htmlFor="fruit">Choose a variety: </label>
                <select name="fruit" className="fruit-select" id="fruit" data-testid="fruit-select">
                    <option value="one" data-testid="fruit-option">
                        Cavendish
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
                <a href="" className="remove">
                    Remove fruit
                </a>
            </div>
            <div>
                <button className="add">Add a fruit</button>
            </div>
        </div>
    );
};

export { App };
