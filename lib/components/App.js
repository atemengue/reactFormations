import React, { Component } from "react";
import ArticleList from "./ArticleList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors,
    };
  }
  articleActions() {
    return {
      lookupAuthor: (authorId) => this.state.authors[authorId],
    };
  }
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions()}
      />
    );
  }
}

export default App;
