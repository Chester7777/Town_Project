import React from 'react';
import s from './App.module.css';
import {Settings} from "./Settings/Settings";
import {Town} from "./Town/Town";

function App() {
    return (
        <div className={s.app}>
            <header className={s.app_header}>
                <h1>City Builder</h1>
            </header>
            <div className={s.app_settings_town}>
                <Settings/>
                {/*<div className={s.app_town}>*/}
                    <Town/>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
