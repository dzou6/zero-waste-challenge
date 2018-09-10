import React, { Component } from 'react';
import '../calculator.css';

const results = (<div id="container_2">
                  <img id="card_02" src={require('../static/calculator_element/card_02.png')} />
                  <div id="outputWaste">
                    <div id="kg">KG</div>
                  </div>

                  <img id="card_03" src={require('../static/calculator_element/card_03.png')} />

                  <img id="arrow_01" src={require('../static/calculator_element/arrow_01.png')} />

                  <img id="arrow_02" src={require('../static/calculator_element/arrow_02.png')} />

                  <img id="arrow_03" src={require('../static/calculator_element/arrow_03.png')} />
                  
                </div>);

const reset = (<div><img id="btn_reset_cover" src={require('../static/calculator_element/btn_reset.png')}/></div>);

class Calculator extends Component {
  state = { showResults: false,showReset: false};
  
  onClickHandler = ()=>{
    this.setState(prev => ({showResults: true,showReset: true}));
    this.caculateWaste();
    function disableCount() {
      document.getElementById("countCover").style.visibility = "hidden";
      document.getElementById("count").style.visibility = "hidden";
      document.getElementById("reset").style.visibility = "visible";
    }
    disableCount();
  };

  onClearHandler = ()=>{
    this.setState(prev => ({showResults: false,showReset:false}));
    this.clearAll();
    function disableCount() {
      document.getElementById("countCover").style.visibility = "visible";
      document.getElementById("count").style.visibility = "visible";
      document.getElementById("reset").style.visibility = "hidden";
    }
    disableCount();
  };

  caculateWaste() {
    var t = document.getElementById("selectHabit").value;
    var d = document.getElementById("selectDay").value;
    document.getElementById("showFst").innerHTML = "\<div id=\'s1\'\>"+d*t+"<\/div\>";
    var wasteReduce = d*t;
    this.caculateLife(wasteReduce);
  }

  caculateLife(wasteReduce) {
    const lifeSaving = 5;
    document.getElementById("show2nd").innerHTML = "\<div id=\'s2\'\>"+wasteReduce*lifeSaving+"<\/div\>";
  }

  clearAll() {
    document.getElementById("showFst").innerHTML = "";
    document.getElementById("show2nd").innerHTML = "";
  }

  render() {
    return (
        <body>
          <div>
            <h3 id="title">
              Zero Waste Caculator
            </h3>
          </div>
          <img id="background" src={require('../static/calculator_element/Calculator_background.png')}/>
          <div id="container_1">
            <img id="card_01" src={require('../static/calculator_element/card_01.png')} />

            <div id="slh">
              <select id="selectHabit">
                <option value="1">Bring your own bag for shopping</option>
                <option value="2">Bring your own cup for drinking</option>
              </select>
            </div>

            <div id="sld">
              <select id="selectDay">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            
            <img id="countCover" src={require('../static/calculator_element/btn_count.png')}/>
            <div>
              <button id="count" onClick={this.onClickHandler}></button>
              {this.state.showResults ? results : null}
              {this.state.showReset ? reset : null}
            </div>
          </div>

          <div class="show" id="showFst"></div>

          <div class="show" id="show2nd"></div>

          <button id="reset" onClick={this.onClearHandler}></button>
        </body>
    );
  }
}

export default Calculator;
