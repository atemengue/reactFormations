import React, { Component } from "react";
import debounce from "lodash.debounce";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleSearch = this.handleSearch.bind(this);

    this.doSearch = this.doSearch.bind(this);
  }

  handleSearch(event) {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        this.doSearch();
      }
    );
  }

  doSearch() {
    const call = debounce(() => {
      this.props.doSearch(this.state.searchTerm);
    }, 500);
    call();
  }

  render() {
    return (
      <input
        value={this.state.searchTerm}
        type="search"
        onChange={this.handleSearch}
        placeholder="entrer your search"
      />
    );
  }
}

export default SearchBar;
