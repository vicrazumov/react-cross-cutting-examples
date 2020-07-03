import React from 'react';
import withLogic from './withLogic';
import DesktopView from '../components/DesktopView';
import MobileView from '../components/MobileView';

const MobileWithLogic = withLogic(MobileView);
const DesktopWithLogic = withLogic(DesktopView);

export default () => (
    <div>
        <h1>HOC</h1>
        <DesktopWithLogic/>
        <MobileWithLogic/>
    </div>
);
