import React, { Component } from "react";
import ArticleList from "./ArticleList.js";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar.js";
import pickBy from "lodash.pickby";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
    // this.setSearchTerm = this.setSearchTerm.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  //pas mal presente beaucoup de problemes
  // setSearchTerm(searchTerm) {
  //   this.setState({ searchTerm });
  // }

  // update when the state changes ...subscribe

  onStoreChange() {
    console.log("change store");
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
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
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object,
};

export default App;
