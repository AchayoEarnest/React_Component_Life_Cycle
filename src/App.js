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
        <div>
          <button>Mount</button>
          <button>Unmount</button>
        </div>

        <Counter />
      </div>
    );
  }
}

export default App;
