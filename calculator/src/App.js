import React from 'react';
import './App.css';

import Display from './components/Display'
import Keys from './components/Keys'

function App() {
  return (
    <div className="Calculator">
      <Display />
      <Keys />
    </div>
  );
}

export default App;
