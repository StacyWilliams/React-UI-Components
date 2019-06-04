import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
    <div className="row calculatorDisplay">
      <CalculatorDisplay />
    </div>
    <div>
     <ActionButton text="clear" buttonStyle="buttonStyle actionButton largeButton clearButton" /> 
     <ActionButton text="÷" buttonStyle="buttonStyle actionButton" /> 
    </div>
    <div className="row">
      <NumberButton text="7" buttonStyle="buttonStyle numberButton" />
      <NumberButton text="8" buttonStyle="buttonStyle numberButton" />
      <NumberButton text="9" buttonStyle="buttonStyle numberButton" />
      <ActionButton text="×" buttonStyle="buttonStyle actionButton" />
    </div>
    <div className="row">
      <NumberButton text="4" buttonStyle="buttonStyle numberButton" />
      <NumberButton text="5" buttonStyle="buttonStyle numberButton" />
      <NumberButton text="6" buttonStyle="buttonStyle numberButton" />
      <ActionButton text="-" buttonStyle="buttonStyle actionButton" />
    </div>
    <div className="row">
      <NumberButton text="1" buttonStyle="buttonStyle numberButton" />
      <NumberButton text="2" buttonStyle="buttonStyle numberButton" />
      <NumberButton text="3" buttonStyle="buttonStyle numberButton" />
      <ActionButton text="+" buttonStyle="buttonStyle actionButton" />
    </div>
    <div className="row">
      <NumberButton text="0" buttonStyle="buttonStyle largeButton zeroButton" />
      <ActionButton text="=" buttonStyle="buttonStyle actionButton" />
    </div>
  </div>
);
};


export default App;
