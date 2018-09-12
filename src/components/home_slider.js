import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './slider_arrow';
import { Tooltip } from 'antd';

class HomeSliders extends React.Component {
    //constructor for quiz component, and init component state

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
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus:true,
      pauseOnHover:true,
      autoplay:true
    }
    return (
      <Tooltip title="Hover on Blue Image to Pause the Animation" placement="rightTop">
        <div style={{margin: '10px auto', width: 898.64, height: 680}}>
          <Slider {...sliderSettings}>
              {this.renderBackgrounds()}
            </Slider>
        </div>
      </Tooltip>


    )
  }
}
export default HomeSliders;