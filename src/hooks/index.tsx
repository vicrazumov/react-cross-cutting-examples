import React from 'react';
import useLogic from './useLogic';
import DesktopView from '../components/DesktopView';
import MobileView from '../components/MobileView';

const Hooks = () => {
    const desktopHook = useLogic();
    const mobileHook = useLogic();

    return (
        <div>
        <h1>Hooks</h1>
        <DesktopView {...desktopHook}/>
        <MobileView {...mobileHook}/>
    </div>
    )
}

export default Hooks;
