import BrandStore from "../../components/BrandStore";

// functional component, loop thru props.brands to show single brand
const BrandStores = (props: any) => {
  return (
    <div className="brands">
      <div className="container">
        <h3>Brand Store</h3>
        <div className="brands-agile">
          {props.brands &&
            props.brands.map((brand: any, index: number) => {
              return <BrandStore {...brand} key={index} />;
            })}

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default BrandStores;
