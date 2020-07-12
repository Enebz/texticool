import React, { useState, useRef } from 'react';
import HandleInput from '../src/InputHandler'
import './App.css';

import { FaTwitter, FaGithub } from 'react-icons/fa';


function App() {
  const [input, setInput] = useState('');
  const outputRef = useRef(null);
  const inputRef = useRef(null);

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
    outputRef.current.innerHTML = HandleInput(inputRef.current.value, GetActiveEffects())
  }

  function inputChange(event) {
    setInput(event.target.value);
    outputRef.current.innerHTML = HandleInput(event.target.value, GetActiveEffects());
  }

  function outputChange(event) {
    
  }

  return (
    <div className="container">
      <div className="main">
        <h1 className="title">
          <span aria-label="freezing" role="img">🥶</span>
          TextiCool
          <span aria-label="overheating" role="img">🥶</span>
        </h1>
        <input ref={inputRef} value={input} onChange={inputChange} className="input" placeholder="Type what you want to coolify...👏" />
        <textarea ref={outputRef} className="output" onChange={outputChange} readOnly></textarea>
        <Settings onEffectChange={SetEffect} effects={effects}/>
        <div className="social">
          <div>
            <a href={"https://twitter.com/intent/tweet?hashtags=&text=" + outputRef.current.innerHTML} className="button tweet">
              <FaTwitter className="icon"/>
              <p className="buttontext">Tweet</p>
            </a>
          </div>
          <div>
            <a className="button github">
              <FaGithub className="icon"/>
              <p className="buttontext">Github</p>
            </a>
          </div>
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
