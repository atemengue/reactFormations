import React, { Component } from "react";
import DataApi from "state-api";
import ArticleList from "./ArticleList.js";

import { data } from "../testData";

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArcticles(),
      authors: api.getAuthors(),
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
