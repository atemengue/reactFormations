import React, { Component } from "react";
import ArticleList from "./ArticleList.js";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return (
      <ArticleList articles={this.state.articles} store={this.props.store} />
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object,
};

export default App;
