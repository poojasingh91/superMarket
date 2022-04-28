interface Props {
  pageSize: number;
  handlePageSizeSelection: (e: any) => void;
}

const PageSize = (props: Props) => {
  return (
    <div className="sorting-left">
      <select
        id="country1"
        value={
          [9, 18, 36].includes(props.pageSize) ? props.pageSize : ""
        }
        onChange={props.handlePageSizeSelection}
        className="frm-field required sect"
      >
        <option value="9">Items/page = 9</option>
        <option value="18">Items/page = 18</option>
        <option value="36">Items/page = 36</option>
        <option value="">All</option>
      </select>
    </div>
  );
};

export default PageSize;
