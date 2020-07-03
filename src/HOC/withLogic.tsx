import React, { useState } from 'react';
import CounterInterface from '../components/CounterInterface';

const withLogic = (Component: (props: CounterInterface) => JSX.Element) => (props: any) => {
    const [value, setValue] = useState(0);

    const incBy1 = () => setValue(value + 1);
    const decBy1 = () => setValue(value - 1);

    return <Component {...props} value={value} incBy1={incBy1} decBy1={decBy1} />
}

export default withLogic;
