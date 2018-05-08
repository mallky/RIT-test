import './App.scss';
import React from 'react';
import Canvas from './components/Canvas.jsx';
import Zoom from './components/Zoom.jsx';

export default class App extends React.Component {
    render () {
        return <div className="main-app">
            <span>Hello Makar!!!! You are the whole World</span>
            <div className="row">
                <Canvas/>
                <Zoom/>
            </div>
        </div>
    }
}
