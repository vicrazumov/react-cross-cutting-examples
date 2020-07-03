import React from 'react';
import LogicOnlyComponent from './LogicOnlyComponent';
import DesktopView from '../components/DesktopView';
import MobileView from '../components/MobileView';

export default () => (
    <div>
        <h1>Render Props</h1>
        <LogicOnlyComponent>
            {(props) => <DesktopView {...props}/>}
        </LogicOnlyComponent>
        <LogicOnlyComponent>
            {(props) => <MobileView {...props}/>}
        </LogicOnlyComponent>
    </div>
);
