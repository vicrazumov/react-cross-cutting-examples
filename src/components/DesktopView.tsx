import React from 'react';
import CounterInterface from './CounterInterface';

export default ({ value, incBy1, decBy1 }: CounterInterface) => (
    <div>
        <h2>DESKTOP</h2>
        <div>value: {value}</div>
        <button onClick={incBy1}>+</button>
        <button onClick={decBy1}>-</button>
    </div>
);
