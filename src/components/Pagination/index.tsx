import { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
  handlePageClick: (e: any, value: number) => void;
  currentPage: number;
  pageSize: number;
  total: number;
}
class Pagination extends Component<Props> {
  constructor(props: Props) {
    super(props);

    // to use 'this' object from these handlers, needs to bind first
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handlePageClickPrev = this.handlePageClickPrev.bind(this);
    this.handlePageClickNext = this.handlePageClickNext.bind(this);
  }

  handlePageClick(e: any) {
    e.preventDefault();
    // get clicked value and pass to parent component
    const value = parseInt(e.target.dataset.value);
    this.props.handlePageClick(e, value);
  }

  handlePageClickPrev(e: any) {
    e.preventDefault();
    // decrease value (not less than 1) and pass to parent component
    const value = this.props.currentPage - 1;
    if (value < 1) {
      return;
    }
    this.props.handlePageClick(e, value);
  }
  handlePageClickNext(e: any) {
    e.preventDefault();
    // increase value up to total page number and pass to parent component
    const value = this.props.currentPage + 1;
    if (value - 1 > Math.floor(this.props.total / this.props.pageSize)) {
      return;
    }
    this.props.handlePageClick(e, value);
  }
  render() {
    // calculate total page number (3.5 page is 4)
    const totalPageNum =
      this.props.total % this.props.pageSize === 0
        ? this.props.total / this.props.pageSize
        : Math.floor(this.props.total / this.props.pageSize) + 1;

    return (
      <nav className="numbering">
        {this.props.total > this.props.pageSize && (
          <ul className="pagination paging">
            {totalPageNum > 0 && (
              <li>
                <Link
                  to="#"
                  aria-label="Previous"
                  onClick={this.handlePageClickPrev}
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
            )}
            {Array.from(Array(totalPageNum).keys()).map((val) =>
              val + 1 === this.props.currentPage ? (
                <li className="active" key={val}>
                  <Link
                    to="#"
                    onClick={this.handlePageClick}
                    data-value={val + 1}
                  >
                    {val + 1}
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
              ) : (
                <li key={val}>
                  <Link
                    to="#"
                    onClick={this.handlePageClick}
                    data-value={val + 1}
                  >
                    {val + 1}
                  </Link>
                </li>
              )
            )}
            {totalPageNum > 0 && (
              <li>
                <Link
                  to="#"
                  aria-label="Next"
                  onClick={this.handlePageClickNext}
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            )}
          </ul>
        )}
      </nav>
    );
  }
}
export default Pagination;
