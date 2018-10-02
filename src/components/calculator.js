import React, { Component } from 'react';
import '../calculator.css';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { number } from 'style-value-types';
import {storiesRef} from '../config/firebase';

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
                    <div id="kg"></div>
                  </div>
                  
                </div>);
//The piece of HTML is "reset" button, which is hidden until clicking the "count" button

class Calculator extends Component {
  //in the begining, the "reset" button and part of HTML are not be shown
  state = { showResults: false,
    showReset: false,
    value: 1,
    strawBorder:false,
    bagBorder:false,
    bottleBorder:false
  };

  constructor (props, context) {
    super(props, context)
    this.state.value = 1;
  }

  dataAnalyze(column){
    const dataList = storiesRef.child('0').child('PlasticAffected').child(column);
    const list = [];
    dataList.on("value", snapshot => {
      console.log(snapshot.val());
      list.push(snapshot.val());
    })

    console.log(list[0]);

    var sum = 0;
    var length = 0;
    function add(value)
    {
      sum = sum+value;
      length++;
    }
    list[0].forEach(add);
    console.log(sum);
    var avg = Math.round(sum/length);
    console.log(avg);
    return avg;
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  data;

  //after clicking "count" button, part of HTML will be displayed and the "recet" button will be displayed
  onClickHandler = ()=>{
    this.setState(prev => ({showResults: true,showReset: true}));
    this.caculateWaste();
    function disableCount() {
      document.getElementById("countCover").style.visibility = "visible";
      document.getElementById("count").style.visibility = "hidden";
      document.getElementById("reset").style.visibility = "visible";
      document.getElementById("happy_btn_01").style.visibility = "visible";
      document.getElementById("happy_btn_02").style.visibility = "visible";
      document.getElementById("happy_btn_03").style.visibility = "visible";
      document.getElementById("happy_01").style.visibility = "visible";
      document.getElementById("happy_02").style.visibility = "visible";
      document.getElementById("happy_03").style.visibility = "visible";
    }
    //call the function to make "count" button invisable
    disableCount();
  };

  //after clicking "reset" button, the "reset" button will disappear and part of the HTML will also disabled
  onClearHandler = ()=>{
    this.setState(prev => ({showResults: false,showReset:false}));
    this.clearAll();
    function disableReset() {
      document.getElementById("countCover").style.visibility = "visible";
      document.getElementById("count").style.visibility = "visible";
      document.getElementById("reset").style.visibility = "hidden";
      document.getElementById("happy_btn_01").style.visibility = "visible";
      document.getElementById("happy_btn_02").style.visibility = "visible";
      document.getElementById("happy_btn_03").style.visibility = "visible";
      document.getElementById("happy_01").style.visibility = "visible";
      document.getElementById("happy_02").style.visibility = "visible";
      document.getElementById("happy_03").style.visibility = "visible";
    }
    //call the function to make "count" button visable
    disableReset();
    function autoClick(){
      document.getElementById("count").click();
    }
    autoClick();
  };

  //mutiply the number of day with the data associated with habit to caculate the amount of waste reduced
  caculateWaste() {
    var t = this.data;
    var d = this.state.value;
    document.getElementById("showFst").innerHTML = "\<div id=\'s1\'\>"+d*t+"<\/div\>";
    var stg = Math.round((d*t)/18);
    document.getElementById("straws").innerHTML = "\<div id=\'st\'\>"+stg+"<\/div\>";
    var wasteReduce = d*t;
    this.caculateLife(wasteReduce);
  }

  //caculate how many sea life will be save if a habit is insisted
  caculateLife(wasteReduce) {
    //the relation between daily used plastic and affected marine animal every day in Australia
    var lifeSaving = 0;
    var ozcdlf = this.dataAnalyze('OZ children affected mrlf daily');
    var animal = this.dataAnalyze('plastic pp daily thrown(gram)');
    lifeSaving = Math.round(ozcdlf/animal);
    console.log(lifeSaving);
    //use the relation value to mutiply a waste reduce value to count how many sea life can be saved
    document.getElementById("show2nd").innerHTML = "\<div id=\'s2\'\>"+wasteReduce*lifeSaving+"<\/div\>";
  }

  //clear all calculation output on screen
  clearAll() {
    document.getElementById("showFst").innerHTML = "";
    document.getElementById("show2nd").innerHTML = "";
  }

  onClickStraw = ()=>{
    document.getElementById("countCover").style.visibility = "visible";
    document.getElementById("count").style.visibility = "visible";
    
    this.data = Math.round(this.dataAnalyze('plastic pp daily thrown(gram)')*0.04);

    this.setState({strawBorder: true});
    this.setState({bagBorder: false});
    this.setState({bottleBorder: false});
    document.getElementById("happy_01").className='clickBtn';
    document.getElementById("happy_02").className='offClickBtn';
    document.getElementById("happy_03").className='offClickBtn';
    
  }

  onClickBag = ()=>{
    document.getElementById("countCover").style.visibility = "visible";
    document.getElementById("count").style.visibility = "visible";
    this.data = Math.round(this.dataAnalyze('plastic pp daily thrown(gram)')*0.16);
    this.setState({strawBorder: false});
    this.setState({bagBorder: true});
    this.setState({bottleBorder: false});
    document.getElementById("happy_02").className='clickBtn';
    document.getElementById("happy_01").className='offClickBtn';
    document.getElementById("happy_03").className='offClickBtn';
  }

  onClickBottle = ()=>{
    document.getElementById("countCover").style.visibility = "visible";
    document.getElementById("count").style.visibility = "visible";
    this.data = Math.round(this.dataAnalyze('plastic pp daily thrown(gram)')*0.175);
    this.setState({strawBorder: false});
    this.setState({bagBorder: false});
    this.setState({bottleBorder: true});
    document.getElementById("happy_03").className='clickBtn';
    document.getElementById("happy_02").className='offClickBtn';
    document.getElementById("happy_01").className='offClickBtn';
  }

  onHoverStraw = ()=>{
    document.getElementById("happy_01").className='selectBtn';
  }

  onHoverBag = ()=>{
    document.getElementById("happy_02").className='selectBtn';
  }

  onHoverBottle = ()=>{
    document.getElementById("happy_03").className='selectBtn';
  }

  outHoverStraw = ()=>{
    if(!this.state.strawBorder)
      document.getElementById("happy_01").className='';
  }

  outHoverBag = ()=>{
    if(!this.state.bagBorder)
      document.getElementById("happy_02").className='';
  }

  outHoverBottle = ()=>{
    if(!this.state.bottleBorder)
      document.getElementById("happy_03").className='';
  }

  

  render() {
    //return the initial HTML part

    return (
        <div style={{width: 815, height: 541, backgroundImage: `url(${require('../static/calculator_element/Calculator_background.png')})`}}>
            <img id="card_01" src={require('../static/calculator_element/card_01.png')} />
            <div style={{position: 'relative', height: 0}}>
              <img id="happy_01" src={require('../static/calculator_element/Story1_Habit1_happy_1.png')}/>
              <img id="happy_02" src={require('../static/calculator_element/Story1_Habit2_happy_1.png')}/>
              <img id="happy_03" src={require('../static/calculator_element/Story1_Habit3_happy_1.png')}/>

              <button id="happy_btn_01" onClick={this.onClickStraw} onMouseOver={this.onHoverStraw} onMouseOut={this.outHoverStraw}>btn_01</button>
              <button id="happy_btn_02" onClick={this.onClickBag} onMouseOver={this.onHoverBag} onMouseOut={this.outHoverBag}>btn_02</button>
              <button id="happy_btn_03"  onClick={this.onClickBottle} onMouseOver={this.onHoverBottle} onMouseOut={this.outHoverBottle}>btn_03</button>

              <div className='slider' id="rangeSlider">
                <Slider
                  min={1}
                  max={21}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className='value' id="day">{this.state.value}</div>
              <img id="countCover" src={require('../static/calculator_element/btn_count.png')}/>
              <button id="count" onClick={this.onClickHandler}>count</button>
            </div>

            {this.state.showResults ? results : null}

          <div style={{position: 'relative'}}>
            <div id="showFst"></div>

            <div id="show2nd"></div>

            <div id="straws"></div>

            <button id="reset" onClick={this.onClearHandler}></button>

          </div>
        </div>
    );
  }
}


export default Calculator;
