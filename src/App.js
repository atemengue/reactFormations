import React from "react";
import "./App.css";
import CardList from "./CardList";
import Form from "./Form";

class App extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    // tres baleze
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div className="App">
        <h1 className="header">The Github Card</h1>
        <div className="container">
          <Form onSubmit={this.addNewProfile} />
          <CardList profiles={this.state.profiles} />
        </div>
      </div>
    );
  }
}

export default App;
