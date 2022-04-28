import PageSize from "./PageSize";
import Sort from "./Sort";

interface Props {
  sort: string;
  pageSize: number;
  handleSortSelection: (e: any) => void;
  handlePageSizeSelection: (e: any) => void;
}
// read props and forward to child component
const PageAndSort = (props: Props) => {
  return (
    <div className="products-right-grid">
      <div className="products-right-grids">
        <Sort
          sort={props.sort}
          handleSortSelection={props.handleSortSelection}
        />
        <PageSize
          pageSize={props.pageSize}
          handlePageSizeSelection={props.handlePageSizeSelection}
        />
        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default PageAndSort;
