import React, { Component } from "react";
import Counter from "./counterContainer";
import  counterContainer from "src/components/counterContainer"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Counter />
                </header>
            </div>
        );
    }
}
export default App;
