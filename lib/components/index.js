import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  state = {
    anwser: 42,
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      anwser: await this.asyncFunc(),
    });
  }

  render() {
    return <h2>Hello Class Component -- {this.state.anwser}</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));