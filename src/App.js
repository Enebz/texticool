import React from 'react';
import './App.css';

function Option(props) {
  // Special returns
  if (props.label == "preachify") {
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
      <input type="checkbox" className="checkbox" id="checkbox"/>
      <p className="label">{props.label}</p>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <div className="main">
        <h1 className="title">TextiCool</h1>
        <input id="input" className="input" placeholder="Type what you want to coolify..." />
        <textarea id="output" className="output" readOnly>Consequat reprehenderit eiusmod magna non ut quis eiusmod officia aliqua dolore excepteur non sunt. Pariatur cupidatat in ut cillum proident proident aliqua duis. Eu sit consequat mollit adipisicing. Nulla velit commodo ad sint proident irure elit consectetur Lorem ipsum sit quis culpa. Exercitation aliquip ea amet ad exercitation incididunt do consectetur occaecat irure. Veniam incididunt eiusmod quis quis mollit sint sit duis reprehenderit nisi eiusmod anim mollit laboris.</textarea>
        <div className="settings">
          <Option label="Spaces" />
          <Option label="Uppercase" />
          <Option label="Lowercase" />
          <Option label="preachify" />
          <Option label="Codeify" />
          <Option label="Morseify" />
          <Option label="Pirateify" />
          <Option label="Backwards" />
          <Option label="Scramble" />
          <Option label="Coify" />
          <Option label="Spafefces" />
          <Option label="Codfefefify" />
          <Option label="Spaces" />
          <Option label="Codifefy" />
          <Option label="Spaces" />
          <Option label="Codifefeffy" />
        </div>
      </div>
    </div>
  );
}

export default App;
