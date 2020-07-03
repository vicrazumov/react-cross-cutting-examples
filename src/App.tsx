import React from 'react';
import HOC from './HOC';
import RenderProps from './renderProps';
import Hooks from './hooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <HOC/>
      <RenderProps/>
      <Hooks/>
    </div>
  );
}

export default App;
