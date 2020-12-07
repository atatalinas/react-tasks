import React from 'react';
import './styles.css';


const Counter = ({ counterValue, parityType, handleAdd, resetCounter, handleRemove }) => {
    return (
        <div className='wrapper'>
            <div className='counter'>
                <h1>{counterValue}</h1>
                <h1>Введено {parityType} число</h1>
                <div className='buttons'>
                    <button onClick={handleRemove}>-</button>
                    <button onClick={resetCounter}>Reset</button>
                    <button onClick={handleAdd}>+</button>
                </div>
            </div>
        </div>
    );
};



export default Counter;