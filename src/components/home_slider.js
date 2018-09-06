import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './slider_arrow';

class HomeSliders extends React.Component {

  //constructor function for Home slider component
  constructor(props) {
    super(props)
    this.backgrounds = [require("../static/home/Home01.png"),
    require("../static/home/Home02.png"),
    require("../static/home/Home03.png"),
    require("../static/home/Home04.png"),
    require("../static/home/Home05.png"),
    require("../static/home/Home06.png"),
    require("../static/home/Home07.png"),
    require("../static/home/Home08.png"),
    require("../static/home/Home09.png"),
    require("../static/home/Home10.png")]

  }

  renderBackgrounds() {
    return this.backgrounds.map(bg => {
      return (
        <div key={bg}>
          <img height="665px" src={bg} alt="slider"/>
        </div>
      );
    });
  }

  //render background accroding to background index
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }
    return (
      <div style={{margin: '10px auto', width: 898.64}}>
        <Slider {...sliderSettings}>
            {this.renderBackgrounds()}
          </Slider>
      </div>


    )
  }
}
export default HomeSliders;