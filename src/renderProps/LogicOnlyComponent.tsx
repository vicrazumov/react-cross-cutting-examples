import { useState } from 'react';
import CounterInterface from '../components/CounterInterface';

interface Props {
    children: (props: CounterInterface) => JSX.Element;
}

function LogicOnlyComponent(props: Props) {
    const [value, setValue] = useState(0);

    const incBy1 = () => setValue(value + 1);
    const decBy1 = () => setValue(value - 1);

    return props.children({ value, incBy1, decBy1 });
}

export default LogicOnlyComponent;
