import React, { Component } from 'react';

class Calculator extends Component {

  caculateWaste() {
    var t = document.getElementById("types").value;
    var d = document.getElementById("days").value;
    document.getElementById("showFst").innerHTML = d*t;
  }

  caculateLife() {
    const lifeSaving = 5;
    var wasteReduce = document.getElementById("showFst").innerHTML;
    document.getElementById("showSecd").innerHTML = wasteReduce*lifeSaving;
  }

  clearAll() {
    document.getElementById("showFst").innerHTML = "";
    document.getElementById("showSecd").innerHTML = "";
  }

  render() {
    return (
        <div className="App">
  
        <div >
          <img id="background" src={require('../static/background.png')} />
        </div>
          <div className="App-intro">
            <h1>
              Zero Waste Caculator
            </h1>
          </div>
          
          <div id="selectHabit">
            <select id="types">
              <option value="1">Bring your own bag for shopping</option>
              <option value="2">Bring your own cup for drinking</option>
            </select>
          </div>
  
          <div id="selectDay">
            <select id="days">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          </div>
  
          <button id="wasteBtn" onClick={(e) => this.caculateWaste(e)}>
            Click me
          </button>
  
          <div id="outputWaste">
              <p id="showFst"></p>
              <div id="kg">KG of Waste</div>
          </div>
  
          <button id="lifeBtn" onClick={(e) => this.caculateLife(e)}>
            Click me
          </button>
  
          <div id="outputAnimals">
          <p id="showSecd"></p>
              <div id="life">Marine lifes</div>
          </div>
  
          <button id="clearBtn" onClick={(e) => this.clearAll(e)}>
            Restart
          </button>
        </div>
    );
  }
}

export default Calculator;
