import { Link } from "react-router-dom";

// functional component to show banners in carousel
const Carousel = (props: any) => {
  const items = props.banners;
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {items &&
          items.map((item: any, index: number) => (
            <li
              data-target="#myCarousel"
              key={index}
              data-slide-to={index}
            ></li>
          ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {items &&
          items.map((item: any, index: number) => (
            <div
              className={"item " + (index === 0 ? "active" : "")}
              key={index}
            >
              <Link to="#">
                <img
                  className="slide"
                  src={item.bannerImage}
                  alt={item.title}
                  width={"100%"}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
