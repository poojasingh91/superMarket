interface Props {
  sort: string;
  handleSortSelection: (e: any) => void;
}

const Sort = (props: Props) => {
  const { sort } = props;
  return (
    <div className="sorting">
      <select
        id="country"
        value={sort}
        onChange={props.handleSortSelection}
        className="frm-field required sect"
      >
        <option value="priceAsc">Sort by Price (Ascending)</option>
        <option value="priceDsc">Sort by Price (Descending)</option>
      </select>
    </div>
  );
};

export default Sort;
