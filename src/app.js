import React from "react";

import "./styles/reset.css";
import "./styles/index.css";

const App = () => {
    return (
        <div class="interview">
            <h1>Fruit Selector</h1>
            <label for="fruit">Choose a fruit: </label>
            <select name="fruit" id="fruit" data-testid="fruit">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
            </select>
        </div>
    );
};

export default App;
