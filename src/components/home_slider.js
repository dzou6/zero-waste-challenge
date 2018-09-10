import React from 'react';


class HomeSliders extends React.Component {
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
    this.state = { backgroundIndex: 0 }

    this.changeBackground = this.changeBackground.bind(this)
  }

  componentDidMount() {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    )
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout)
  }

  changeBackground() {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.props.animDuration * 1000
      )
    })
  }

  render() {
    return (
      <div style={{ margin: "10px auto", display: "flex", justifyContent: 'center' }}>
        <img height="665px" src={this.backgrounds[this.state.backgroundIndex]} alt="slider"/>
      </div>


    )
  }
}
export default HomeSliders;