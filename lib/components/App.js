import React, { Component } from "react";
import ArticleList from "./ArticleList.js";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar.js";
import pickBy from "lodash.pickby";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  setSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object,
};

export default App;
