import React, { useState, useRef } from 'react';
import HandleInput from '../src/InputHandler'
import './App.css';

var effects = {
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
  "Sexy":       {name:"Sexy"      ,state:false},
  "Emoji Spam": {name:"Emoji Spam",state:false},
};

function effectSet(event) {
  const option = event.target;
  const value = option.value;

  effects[option.label].state = value;
}

function Settings() {
  const listOptions = Object.keys(effects).map((d) => <Option key={Object.keys(effects).indexOf(d)} label={d}/>);
  return (
    <div className="settings">
      {listOptions}
    </div>
  );  
}

function App() {
  const [input, setInput] = useState('');
  const outputRef = useRef(null);

  function inputChange(event) {
    setInput(event.target.value);
    outputRef.current.innerHTML = HandleInput(event.target.value);
  }

  return (
    <div className="container">
      <div className="main">
        <h1 className="title">
          <span aria-label="freezing" role="img">🥶</span>
          TextiCool
          <span aria-label="overheating" role="img">🥵</span>
        </h1>
        <input value={input} onChange={inputChange} className="input" placeholder="Type what you want to coolify...👏" />
  <textarea ref={outputRef} className="output" readOnly></textarea>
        <Settings />
      </div>
    </div>
  );
}

function Option(props) {
  // Special returns
  if (props.label === "preachify") {
    return (
      <div className="option">
        <input type="checkbox" className="checkbox" id="checkbox"/>
        <a href="https://github.com/christianholman/omgpreach" className="label link">{props.label}</a>
      </div>
    )
  }

  // Default return
  return (
    <div className="option">
      <input onChange={effectSet} type="checkbox" className="checkbox" id="checkbox"/>
      <p className="label">{props.label}</p>
    </div>
  )
}

export default App;
