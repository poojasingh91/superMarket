import { Component } from "react";

class SearchBar extends Component<any> {
  constructor(props: any) {
    super(props);
    // to use 'this' object from these handlers, needs to bind first
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(e: any) {
    e.preventDefault();
    this.props.handleSearch(e.target.search.value);
  }
  render() {
    return (
      <div className="w3l_search">
        <form action="#" method="post" onSubmit={this.handleSearchSubmit}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a Product..."
            required
          />
          <button
            type="submit"
            className="btn btn-default search"
            aria-label="Left Align"
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          <div className="clearfix"></div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
