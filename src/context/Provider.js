// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {

  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);
  const [signal, changeSignal] = useState('red');

  const context = {
    redCar,
    setRedCar,
    blueCar,
    setBlueCar,
    yellowCar,
    setYellowCar,
    signal,
    changeSignal,
  }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
