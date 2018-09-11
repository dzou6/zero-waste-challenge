import React, { Component } from 'react';
import '../calculator.css';

const results = (<div style={{marginTop: 60, display: 'flex'}}>

                  <img id="card_03" src={require('../static/calculator_element/card_03.png')} />
                  <div style={{width: 70, position: 'relative'}}>
                    <img id="arrow_01" src={require('../static/calculator_element/arrow_01.png')} />

                    <img id="arrow_02" src={require('../static/calculator_element/arrow_02.png')} />

                    <img id="arrow_03" src={require('../static/calculator_element/arrow_03.png')} />
                  </div>
                  <img id="card_02" src={require('../static/calculator_element/card_02.png')} />

                  <div id="outputWaste">
                    <div id="kg">KG</div>
                  </div>
                </div>);

const reset = (<div style={{position: 'relative'}}><img id="btn_reset_cover" src={require('../static/calculator_element/btn_reset.png')}/></div>);

class Calculator extends Component {
  state = { showResults: false,
    showReset: false
  };
  
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

  onChangeHandler(e)
  {
    function show1()
    {
      document.getElementById("happy_01").style.visibility= "visible";
      document.getElementById("happy_02").style.visibility= "hidden";
      document.getElementById("happy_03").style.visibility= "hidden";
    }

    function show2()
    {
      document.getElementById("happy_01").style.visibility= "hidden";
      document.getElementById("happy_02").style.visibility= "visible";
      document.getElementById("happy_03").style.visibility= "hidden";
    }

    function show3()
    {
      document.getElementById("happy_01").style.visibility= "hidden";
      document.getElementById("happy_02").style.visibility= "hidden";
      document.getElementById("happy_03").style.visibility= "visible";
    }

    if(e.target.value==1)
    {
      show1();
    }

    if(e.target.value==2)
    {
      show2();
    }

    if(e.target.value==3)
    {
      show3();
    }
    
  }

  render() {
    return (
        <div style={{width: 815, height: 499, backgroundImage: `url(${require('../static/calculator_element/Calculator_background.png')})`}}>
            <img id="card_01" src={require('../static/calculator_element/card_01.png')} />
            <div style={{position: 'relative', height: 0}}>
              <img id="happy_01" src={require('../static/calculator_element/Story1_Habit1_happy_1.png')}/>
              <img id="happy_02" src={require('../static/calculator_element/Story1_Habit2_happy_1.png')}/>
              <img id="happy_03" src={require('../static/calculator_element/Story1_Habit3_happy_1.png')}/>
              <div id="slh" style={{position: 'absolute', left: 320, bottom: 129}}>
                <select id="selectHabit" value={this.state.value} onChange={this.onChangeHandler}>
                  <option value="1" >do not use single use plastic straws</option>
                  <option value="2" >bring my own bag for shopping</option>
                  <option value="3" >bring my own bottle and cup</option>
                </select>
              </div>
              <div id="sld" style={{position: 'absolute', left: 360, bottom: 40}}>
                <select id="selectDay" size="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                </select>
              </div>
              <img id="countCover" src={require('../static/calculator_element/btn_count.png')}/>
              <button id="count" onClick={this.onClickHandler}>count</button>
            </div>

            {this.state.showResults ? results : null}
            {this.state.showReset ? reset : null}

          <div style={{position: 'relative'}}>
            <div id="showFst"></div>

            <div id="show2nd"></div>

            <button id="reset" onClick={this.onClearHandler}></button>
          </div>
        </div>
    );
  }
}

export default Calculator;
