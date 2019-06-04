import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
    return (
        <div className='calculatorDisplay'> 
            {props.value}
        </div>
    )
}
export default CalculatorDisplay;