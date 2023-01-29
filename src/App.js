import React, { Component } from "react";
import Counter from "./Counter";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
    };

    this.mount = () => this.setState({ mount: (this.state = true) });
    this.unmount = () => this.setState({ mount: (this.state = false) });
  }
  render() {
    return (
      <div className="bg-teal-300 h-screen flex justify-center items-center flex-col">
        <div className="flex gap-3 mb-2">
          <button
            className=" bg-red-500 rounded-lg p-2 text-white w-24  hover:bg-red-400"
            onClick={this.mount}
          >
            Mount
          </button>
          <button className=" bg-red-500 rounded-lg p-2 text-white w-24 hover:bg-red-400"
            onClick={this.unmount}>Unmount</button>
        </div>

        <Counter />
      </div>
    );
  }
}

export default App;
