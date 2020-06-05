class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: "",
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getState() {
    return this.data;
  }
  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }
}

// getArticles() {
//   return this.mapIntoObject(this.rawData.articles);
// }

// getAuthors() {
//   return this.mapIntoObject(this.rawData.authors);
// }

// getState() {
//   return {
//     articles: this.getArticles(),
//     authors: this.getAuthors(),
//   };

export default StateApi;
