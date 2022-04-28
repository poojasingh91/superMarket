import { Link } from "react-router-dom";

interface BrandStoreProps {
  id: number;
  icon: string;
  slug: string;
  title: string;
}

// read properties and display
const BrandStore = (props: BrandStoreProps) => {
  const { title } = props;
  return (
    <div className="col-md-2 w3layouts-brand">
      <div className="brands-w3l">
        <p>
          <Link to="#">{title}</Link>
        </p>
      </div>
    </div>
  );
};

export default BrandStore;
