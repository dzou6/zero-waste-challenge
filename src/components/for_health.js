import React, { Component } from 'react';
//import real-time database reference into this component
import {storiesRef} from '../config/firebase';

//change the visibility of a normal and sick child icons
function Show()
{
    document.getElementById("child_normal").style.visibility = "hidden";
    document.getElementById("child_sick").style.visibility = "visible";
}

class health extends Component {
  //high level and flexible function to caculate average rate of diabetes happening in Australia hospital
  dataAnalyze(column,total){
    const dataList = storiesRef.child('0').child('diabetesRatio').child(column);
    const list = [];
    dataList.on("value", snapshot => {
      list.push(snapshot.val());
    })
    console.log(list[0]);
    var sum = 0;
    function add(value)
    {
      sum = sum+value;
    }
    list[0].forEach(add);
    console.log(sum);
    const all = storiesRef.child('0').child('diabetesRatio').child(total);
    var tt = 0;
    all.on("value", snapshot => {
      tt = snapshot.val();
    })
    console.log(tt);
    const p = sum/tt;
    console.log(p);
    return p;
  }

  //specify the columns of table columns to call the dataAnalyze function and show the result on a specific div
  countDays(){
    var dr = this.dataAnalyze('Persons','Total');
    console.log(dr);
    var days = 0;
    var dailyIncre = 0;
    const dailyIncreRef = storiesRef.child('0').child('diabetesRatio').child('DailyPIncre');
    dailyIncreRef.on("value", snapshot => {
      dailyIncre = snapshot.val();
    })
    days = dr/dailyIncre;
    console.log(days);
    document.getElementById("d").innerHTML = Math.round(days)+" days, may double your chances";
  }

  //click different buttons to show the different information of diabetes
  onClickPancreas = ()=>{
    Show()
    document.getElementById("diabetes").style.visibility = "visible";
    document.getElementById("cardiovascular_disease").style.visibility = "hidden";
    document.getElementById("heart_warning").style.visibility = "hidden";
    document.getElementById("diabetes_p").style.visibility = "visible";
    document.getElementById("vid_d").style.visibility = "visible";
    document.getElementById("vid_c").style.visibility = "hidden";
    this.countDays();
  };

  //click different buttons to show the different information of heart disease
  onClickCardiovascular = ()=>{
    Show()
    document.getElementById("diabetes").style.visibility = "hidden";
    document.getElementById("cardiovascular_disease").style.visibility = "visible";
    document.getElementById("heart_warning").style.visibility = "visible";
    document.getElementById("diabetes_p").style.visibility = "hidden";
    document.getElementById("vid_d").style.visibility = "hidden";
    document.getElementById("vid_c").style.visibility = "visible";
};

  render() {
    return (
      <div className="organ_health">
        <div>
          <div>
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
             Look out!<br/> Using plastic product for more than <div id="d"></div>of getting diabetes.<br/>
             <a className="readmore" target="_blank" href="https://academic.oup.com/jcem/article/96/12/3822/2834949"><em>Read more</em></a>
          </div>
          <div id="heart_warning">
             Regular use of plastic products<br/> can lead to issues later in life,<br/> like heart disease.<br/>
             <a className="readmore" target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/25723814"><em>Read more</em></a>
          </div>
          <div id="vid_d">
              <p style={{fontSize:14}}>What is Type 1 Diabetes? Diabetes explained for children - Ask Dr.Smarty</p>
              <iframe width="300" height="250" src="https://www.youtube.com/embed/OBvIYCWOG5Q" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>              
          </div>
          <div id="vid_c">
              <p style={{fontSize:14}}>What causes heart attacks?</p> 
              <iframe width="300" height="250" src="https://www.youtube.com/embed/_WXxET_DzE4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
      </div>
    );
  }
}

export default health;