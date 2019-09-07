import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>你好厉亚鑫，晚上加班吗？</h1>
        <p>
          6点吗？那你下班之后我们去仙林？
          <span role="img" aria-label="eyes">👀</span>
        </p>
      </header>
    </div>
  );
}

export default App;
