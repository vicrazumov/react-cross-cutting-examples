import { useState } from 'react';
import CounterInterface from '../components/CounterInterface';

function useLogic(): CounterInterface {
    const [value, setValue] = useState(0);

    const incBy1 = () => setValue(value + 1);
    const decBy1 = () => setValue(value - 1);

    return {
        value,
        incBy1,
        decBy1,
    }
}

export default useLogic;
