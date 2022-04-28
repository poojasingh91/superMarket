import { useLocation, useNavigate, useParams } from "react-router-dom";

// custom function for geting path value from param like (single/:id when called single/1, param.id will have 1)
const withRouter = (Component: any) => {
  const ComponentWithRouterProp = (props: any) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

export default withRouter;
