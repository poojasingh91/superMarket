import { Component } from "react";

class Slider extends Component<any> {
  componentDidMount() {
    // call from jquery
    const tempWindow: any = window;
    const $ = tempWindow.$;
    $("#demo1").skdslider({
      delay: 5000,
      animationSpeed: 2000,
      showNextPrev: true,
      showPlayButton: true,
      autoSlide: true,
      animationType: "fading",
    });
  }
  render() {
    const { bannerImage, shortDescription, title } = this.props;
    return (
      <li>
        <img src={bannerImage} alt="" />
        <div className="slide-desc">
          <h3>{title}</h3>
          <p>{shortDescription}</p>
        </div>
      </li>
    );
  }
}

export default Slider;
