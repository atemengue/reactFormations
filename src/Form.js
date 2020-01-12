import React from "react";
import axios from "axios";

// finished conveted all class Component to HOC
class Form extends React.Component {
  state = { userName: " " };

  handleSubmit = async event => {
    event.preventDefault();
    // responsabilite sur les api
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: " " });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="github username"
          required
          // extraire la logique du setState
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button> Add card</button>
      </form>
    );
  }
}

export default Form;
