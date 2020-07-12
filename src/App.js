import React, { useState, useRef } from 'react';
import HandleInput from '../src/InputHandler'
import './App.css';

import { FaTwitter, FaGithub, FaFileAlt, FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';


function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const charcountRef = useRef(null);

  const [effects, setEffects] = useState({
    "Spaces":     {name:"Spaces"    ,state:false},
    "Uppercase":  {name:"Uppercase" ,state:false},
    "Lowercase":  {name:"Lowercase" ,state:false},
    "preachify":  {name:"preachify" ,state:false},
    "Codeify":    {name:"Codeify"   ,state:false},
    "Morseify":   {name:"Morseify"  ,state:false},
    "Pirateify":  {name:"Pirateify" ,state:false},
    "Backwards":  {name:"Backwards" ,state:false},
    "Scramble":   {name:"Scramble"  ,state:false},
    "Randomify":  {name:"Randomify" ,state:false},
    "Consonants": {name:"Consonants",state:false},
    "Vowels":     {name:"Vowels"    ,state:false},
    "Funny":      {name:"Funny"     ,state:false},
    "Poop":       {name:"Poop"      ,state:false},
    "Cool":       {name:"Cool"      ,state:false},
    "Emoji Spam": {name:"Emoji Spam",state:false},
  });

  function GetActiveEffects() {
    var activeEffects = [];
    for (var effect in effects) {
      if (effects[effect].state) {
        activeEffects.push(effects[effect].name.toLowerCase());
      }
    }
    return activeEffects;
  }

  function SetEffect(event) {
    // Event info
    const option = event.target;
    const checked = option.checked;

    // Update the Effects state
    var newEffects = effects;
    newEffects[option.id].state = checked;
    setEffects(newEffects);  

    // Handle the input
    setOutput(HandleInput(input, GetActiveEffects()));
  }

  function inputChange(event) {
    setInput(event.target.value);
    setOutput(HandleInput(event.target.value, GetActiveEffects()));
  }

  function CharCountBG() {
    var abc = {
      red:   {a: -0.0065,  b: 2.7321, c: -25    },
      green: {a: -0.0065,  b: 0.9107, c: 225  },
      blue:  {a:  0.0000,  b: 0.0000, c: 30   },
    };

    var rgb = {};
    
    if (output.length > 280) {
      var rgb = {
        red:    abc.red.a   * 280 * 280 + abc.red.b   * 280 + abc.red.c   ,
        green:  abc.green.a * 280 * 280 + abc.green.b * 280 + abc.green.c ,
        blue:   abc.blue.a  * 280 * 280 + abc.blue.b  * 280 + abc.blue.c  ,
      };
    }
    else {
      var rgb = {
        red:    abc.red.a   * output.length * output.length + abc.red.b   * output.length + abc.red.c   ,
        green:  abc.green.a * output.length * output.length + abc.green.b * output.length + abc.green.c ,
        blue:   abc.blue.a  * output.length * output.length + abc.blue.b  * output.length + abc.blue.c  ,
      };
    }
    return `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
  }

  function CharCountData() {
    var label = output.length;
    if (output.length > 280) {
      label = label.toString() + "!"
    }
    return label;
  }

  function CopyOutput() {
    copy(output);
  }

  return (
    <div className="container">
      <div className="main">
        <h1 className="title">
          <span aria-label="freezing" role="img">😍</span>
          TextiCool
          <span aria-label="overheating" role="img">😎</span>
        </h1>
        <input className="input" value={input} onChange={inputChange} placeholder="Type what you want to coolify..." />
        <textarea className="output" value={output} placeholder="This is the results..." readOnly></textarea>
        <Settings onEffectChange={SetEffect} effects={effects}/>
        <div className="social">
          <div className="socialpart">
            <div style={{backgroundColor: CharCountBG()}} className="charcount">
              <FaFileAlt className="icon"/>
              <p dangerouslySetInnerHTML={{__html: CharCountData()}} className="buttontext"></p>
            </div>
          </div>
          <div className="socialpart">
            <div onClick={CopyOutput} className="button copy">
              <FaCopy className="icon"/>
              <p className="buttontext">Copy</p>
            </div>
            <a href={"https://twitter.com/intent/tweet?hashtags=&text=" + output + " - Sent with TextiCool."} className="button tweet">
              <FaTwitter className="icon"/>
              <p className="buttontext">Tweet</p>
            </a>
            <a href="https://www.github.com/Enebz" className="button github">
              <FaGithub className="icon"/>
              <p className="buttontext">Github</p>
            </a>
          </div>
        </div>
        <div className="credits">
          <p className="madeby">Made by: <a href="https://www.github.com/Enebz" className="page">Enebz❤️</a></p>
        </div>
      </div>
    </div>
  );
}

function Settings(props) {
  const listOptions = Object.keys(props.effects).map((d) => <Option onChange={props.onEffectChange} key={Object.keys(props.effects).indexOf(d)} label={d}/>);
  return (
    <div className="settings">
      {listOptions}
    </div>
  );  
}

function Option(props) {
  // Special returns
  if (props.label === "preachify") {
    return (
      <div className="option">
        <input onChange={props.onChange} type="checkbox" className="checkbox" id={props.label}/>
        <a href="https://github.com/christianholman/omgpreach" className="label link">{props.label}</a>
      </div>
    )
  }

  // Default return
  return (
    <div className="option">
      <input onChange={props.onChange} type="checkbox" className="checkbox" id={props.label}/>
      <p className="label">{props.label}</p>
    </div>
  )
}

export default App;
