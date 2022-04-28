import Slider from "../../components/Slider";

// functional component to show sliders
const MainSlider = (props: any) => {
  const { banners } = props;
  return (
    <div>
      <ul id="demo1">
        {banners &&
          banners.map((banner: any, index: number) => (
            <Slider key={index} {...banner} />
          ))}
      </ul>
    </div>
  );
};

export default MainSlider;
