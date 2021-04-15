// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import Provider from './context/Provider';

function App() {
  return (
    <div className="container">
      <Provider>
        <Cars />
        <TrafficSignal />
      </Provider>
    </div>
  );
}

export default App;
