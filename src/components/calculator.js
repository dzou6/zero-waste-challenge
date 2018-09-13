import React, { Component } from 'react';
import '../calculator.css';

//The piece of HTML will appear after clicking the "count" button
const results = (<div style={{marginTop: 60, display: 'flex'}}>

                  <img id="card_03" src={require('../static/calculator_element/card_03.png')} />
                  <div style={{width: 70, position: 'relative'}}>
                    <img id="arrow_01" src={require('../static/calculator_element/arrow_01.png')} />

                    <img id="arrow_02" src={require('../static/calculator_element/arrow_02.png')} />

                    <img id="arrow_03" src={require('../static/calculator_element/arrow_03.png')} />
                  </div>
                  <img id="card_02" src={require('../static/calculator_element/card_02.png')} />

                  <div id="outputWaste">
                    <div id="kg">Grams</div>
                  </div>
                </div>);
//The piece of HTML is "reset" button, which is hidden until clicking the "count" button
const reset = (<div style={{position: 'relative'}}><img id="btn_reset_cover" src={require('../static/calculator_element/btn_reset.png')}/></div>);

class Calculator extends Component {
  //in the begining, the "reset" button and part of HTML are not be shown
  state = { showResults: false,
    showReset: false
  };
  
  //after clicking "count" button, part of HTML will be displayed and the "recet" button will be displayed
  onClickHandler = ()=>{
    this.setState(prev => ({showResults: true,showReset: true}));
    this.caculateWaste();
    function disableCount() {
      document.getElementById("countCover").style.visibility = "hidden";
      document.getElementById("count").style.visibility = "hidden";
      document.getElementById("reset").style.visibility = "visible";
    }
    //call the function to make "count" button invisable
    disableCount();
  };

  //after clicking "reset" button, the "reset" button will disappear and part of the HTML will also disabled
  onClearHandler = ()=>{
    this.setState(prev => ({showResults: false,showReset:false}));
    this.clearAll();
    function disableCount() {
      document.getElementById("countCover").style.visibility = "visible";
      document.getElementById("count").style.visibility = "visible";
      document.getElementById("reset").style.visibility = "hidden";
    }
    //call the function to make "count" button visable
    disableCount();
  };

  //mutiply the number of day with the data associated with habit to caculate the amount of waste reduced
  caculateWaste() {
    var t = document.getElementById("selectHabit").value;
    var d = document.getElementById("selectDay").value;
    document.getElementById("showFst").innerHTML = "\<div id=\'s1\'\>"+d*t+"<\/div\>";
    var wasteReduce = d*t;
    this.caculateLife(wasteReduce);
  }

  //caculate how many sea life will be save if a habit is insisted
  caculateLife(wasteReduce) {
    //the relation between daily used plastic and affected marine animal every day in Australia
    const lifeSaving = 252;
    //use the relation value to mutiply a waste reduce value to count how many sea life can be saved
    document.getElementById("show2nd").innerHTML = "\<div id=\'s2\'\>"+wasteReduce*lifeSaving+"<\/div\>";
  }

  //clear all calculation output on screen
  clearAll() {
    document.getElementById("showFst").innerHTML = "";
    document.getElementById("show2nd").innerHTML = "";
  }

  //show different image based on the value of habit
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

    if(e.target.value==13)
    {
      show1();
    }

    if(e.target.value==50)
    {
      show2();
    }

    if(e.target.value==55)
    {
      show3();
    }
    
  }

  render() {
    //return the initial HTML part
    return (
        <div style={{width: 815, height: 499, backgroundImage: `url(${require('../static/calculator_element/Calculator_background.png')})`}}>
            <img id="card_01" src={require('../static/calculator_element/card_01.png')} />
            <div style={{position: 'relative', height: 0}}>
              <img id="happy_01" src={require('../static/calculator_element/Story1_Habit1_happy_1.png')}/>
              <img id="happy_02" src={require('../static/calculator_element/Story1_Habit2_happy_1.png')}/>
              <img id="happy_03" src={require('../static/calculator_element/Story1_Habit3_happy_1.png')}/>
              <div id="slh" style={{position: 'absolute', left: 320, bottom: 129}}>
                <select id="selectHabit" value={this.state.value} onChange={this.onChangeHandler}>
                  <option value="13" >do not use single use plastic straws</option>
                  <option value="50" >bring my own bag for shopping</option>
                  <option value="55" >bring my own bottle and cup</option>
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
