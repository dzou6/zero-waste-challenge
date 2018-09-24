import React from 'react';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle } from '@fortawesome/fontawesome-free-regular';

class HomeSliders extends React.Component {
    //constructor for quiz component, and init component state

  //constructor function for Home slider component
  constructor(props) {
    super(props)
    this.state = {
      slideAutoplay: true
    }
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
          <img height="580px" width="890px" src={bg} alt="slider"/>
        </div>
      );
    });
  }

  onClickSlideCtlBtn() {
    if(this.state.slideAutoplay) {
      this.slider.slickPause();
    } else {
      this.slider.slickPlay();
    }
    this.setState({slideAutoplay: !this.state.slideAutoplay});
  }

  //render background accroding to background index
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 1000,
      autoplaySpeed:2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus:true,
      pauseOnHover:true,
      autoplay: true
    }
    return (
      // <Tooltip title="Hover around the Middle to Pause the Animation" placement="right">
        <div style={{margin: '10px auto', width: 890, height: 600}}>
          <Slider ref={slider => (this.slider = slider)} {...sliderSettings}>
              {this.renderBackgrounds()}
            </Slider>
            <div onClick={() => this.onClickSlideCtlBtn()} style={{
                position: "relative",
                fontSize: "3em",
                bottom: 70,
                left: 903,
                cursor: 'pointer',
                height: 0,
                width: 0
            }}>
                <FontAwesomeIcon icon={this.state.slideAutoplay? faPauseCircle: 'play-circle'} />
            </div>
        </div>
      // </Tooltip>


    )
  }
}
export default HomeSliders;