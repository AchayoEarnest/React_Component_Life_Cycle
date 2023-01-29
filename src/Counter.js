import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount(){
    console.log("The component did mount")
  }

  render() {
    return (
      <div>
        <div className=" bg-white p-6 rounded-lg w-96 h-96 shadow-lg flex justify-center items-center">
          <div className="flex flex-col text-center gap-3">
            <h2>Counter</h2>
            <div>{this.state.counter}</div>

            <div>
              <button
                className=" bg-yellow-800 rounded-lg p-2 text-white mr-2"
                onClick={this.increment}
              >
                Increment
              </button>
              <button
                className=" bg-yellow-800 rounded-lg p-2 text-white"
                onClick={this.decrement}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  componentDidUpdate(){
    console.log("The component did update")
  }
}
