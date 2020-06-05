class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: "",
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.notifySubscribers = this.notifySubscribers.bind(this);
    this.getState = this.getState.bind(this);
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

  subscribe(cb) {
    // callback
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe(subscriptionId) {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers() {
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  // mergeWithState(stateChange) {
  //   const data = Object.assign({}, this.data);
  //   // const data2 = Object.assign({}, stateChange);
  //   this.data = {
  //     ...this.data,
  //     ...stateChange,
  //   };
  //   // eviter les notifications
  //   this.notifySubscribers();
  // }

  setSearchTerm(searchTerm) {
    // this.setState({ searchTerm }); //TODO
    this.data.searchTerm = searchTerm;
    this.notifySubscribers();
    // this.emit = searchTerm
    // this.mergeWithState({
    //   searchTerm,
    // });
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
