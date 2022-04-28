import { Link } from "react-router-dom";

interface BreadcrumbProps {
  name: string;
}
// receive props and render
const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ol
          className="breadcrumb breadcrumb1 animated wow slideInLeft"
          data-wow-delay=".5s"
        >
          <li>
            <Link to="/">
              <span
                className="glyphicon glyphicon-home"
                aria-hidden="true"
              ></span>
              Home
            </Link>
          </li>
          <li className="active">{props.name}</li>
        </ol>
      </div>
    </div>
  );
};
export default Breadcrumb;
