import React, { Component } from 'react';

function Show()
{
    document.getElementById("child_normal").style.visibility = "hidden";
    document.getElementById("child_sick").style.visibility = "visible";
}

class health extends Component {

  onClickPancreas = ()=>{
    Show()
    document.getElementById("diabetes").style.visibility = "visible";
    document.getElementById("cardiovascular_disease").style.visibility = "hidden";
    document.getElementById("heart_warning").style.visibility = "hidden";
    document.getElementById("diabetes_p").style.visibility = "visible";
    document.getElementById("vid_d").style.visibility = "visible";
    document.getElementById("vid_c").style.visibility = "hidden";
  };

  onClickCardiovascular = ()=>{
    Show()
    document.getElementById("diabetes").style.visibility = "hidden";
    document.getElementById("cardiovascular_disease").style.visibility = "visible";
    document.getElementById("heart_warning").style.visibility = "visible";
    document.getElementById("diabetes_p").style.visibility = "hidden";
    document.getElementById("vid_d").style.visibility = "hidden";
    document.getElementById("vid_c").style.visibility = "visible";
};

  onHoverTip = ()=>{
    document.getElementById("hint").style.visibility = "visible";
  }

  offHoverTip = ()=>{
    document.getElementById("hint").style.visibility = "hidden";
  }

  render() {
    return (
      <div className="organ_health">
        <div>
          <div onMouseOver={this.onHoverTip} onMouseOut={this.offHoverTip}>
            <img id="child_normal" src={require('../static/for_health/child_normal.png') } />
            <img id="child_sick" src={require('../static/for_health/child_sick.png')} />
          </div>          
          <img id="hint" src={require('../static/for_health/hint.png')}/>
          <img id="diabetes" src={require('../static/for_health/diabetes.png')} />
          <img id="cardiovascular_disease" src={require('../static/for_health/cardiovascular_disease.png')} />
        </div>
        <div>
          <button id="pancreas" onClick={this.onClickPancreas}>btn_01</button>
          <button id="cardiovascular" onClick={this.onClickCardiovascular}>btn_02</button>
        </div>
          <div id="diabetes_p">
             If you use plastic products<br/> for more than 18 days,<br/> your chances of getting <br/>diabetes may double.
          </div>
          <div id="heart_warning">
             Frequently use of plastic product<br/> may cause heart disease,<br/> or heart attack combined.
          </div>
          <div id="vid_d">
              <iframe width="200" height="170" src="https://www.youtube.com/embed/OBvIYCWOG5Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
              <p>What is Type 1 Diabetes? Diabetes explained for children - Ask Dr.Smarty</p>             
          </div>
          <div id="vid_c">
              <iframe width="200" height="170" src="https://www.youtube.com/embed/3_PYnWVoUzM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <p>What happens during a heart attack? - Krishna Sudhir</p> 
          </div>
      </div>
    );
  }
}

export default health;