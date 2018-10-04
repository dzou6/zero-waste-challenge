import React, { Component } from 'react';
import {storiesRef} from '../config/firebase';

function Show()
{
    document.getElementById("child_normal").style.visibility = "hidden";
    document.getElementById("child_sick").style.visibility = "visible";
}

class health extends Component {

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
    document.getElementById("d").innerHTML = Math.round(days);
  }

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
             Look out!<br/> using plastic product for more than <br/><div id="d"></div> days, may double your chances<br/>of getting diabetes.<br/>
             <a className="readmore" href="https://watermark.silverchair.com/jcem3822.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAh0wggIZBgkqhkiG9w0BBwagggIKMIICBgIBADCCAf8GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMgaZygGEdwXfqp14hAgEQgIIB0A1rghBEIS0LvWuI2X9D8x2vxUZwHR52pkPlHjTYWsZyuLhlFaY2RZtuW3GQ0ZPMpOBV7N_RODHfnzbZs4_-uDzWFyl9fw0NCYK28MgfcRbovR6CJHfO0fAlt2_DlMi2QlUUwtA1n-S7yOV9vxVVm8qAOCPjmlzQU-xQ5DQ6lK-MAQtUCo_dRP-8kLPvDXkFtTyOILgXPiN1FibHTo2_pioYtc7pfTdPOnrJ3zJzLBrz3gLSmyKuWSKCBEwaWdel35RpDj_w8iPE0xDv4grBQSYyAqaRW1XiswulxW7ZuhLnzQTrD2eUMprD4WBwMNO660Eimnf06NMAa0KveSVoRui5YyWKw_IvaX1XNj_wvNLW98x0StEiPnS7_UM7hEfpbecZxAUAFTI0nxXR8tM_65dJ5z5GUg05_P4kIlk9FXhSmi4uvkH0k96dijxH6mM69nG50UqfIPwhhtLW5WS8mqbAqP5yeZpQEzLT0UWb20TbYT4IG9vCgylSbPoQhUWRFu79iLiZIoWolY2MLYV6IDgvPCjI2eBDsjjWxHXkWUZN52lvccfzWIvzfUQzW0Uf-_IBHKJeDKdL3rP0KYcBJU0HP3_jmNjyeBGN_Nlees31"><em>Read more</em></a>
          </div>
          <div id="heart_warning">
             Regular use of plastic product<br/> can lead to issues later in life,<br/> like heart disease.<br/>
             <a className="readmore" href="https://www.tandfonline.com/doi/full/10.3109/10408444.2013.860075#aHR0cHM6Ly93d3cudGFuZGZvbmxpbmUuY29tL2RvaS9wZGYvMTAuMzEwOS8xMDQwODQ0NC4yMDEzLjg2MDA3NT9uZWVkQWNjZXNzPXRydWVAQEAw"><em>Read more</em></a>
          </div>
          <div id="vid_d">
              <p>What is Type 1 Diabetes? Diabetes explained for children - Ask Dr.Smarty</p>
              <iframe width="300" height="250" src="https://www.youtube.com/embed/OBvIYCWOG5Q" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>              
          </div>
          <div id="vid_c">
              <p>What happens during a heart attack? - Krishna Sudhir</p> 
              <iframe width="300" height="250" src="https://www.youtube.com/embed/3_PYnWVoUzM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
      </div>
    );
  }
}

export default health;