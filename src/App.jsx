import './App.scss';
import React from 'react';
import Canvas from './components/Canvas.jsx';
import Zoom from './components/Zoom.jsx';
import List from './components/List.jsx';

export default class App extends React.Component {
    render () {
        return <div className="main-app">
            <div className="header">
                <span>Повреждения</span>
                <span>Участник А</span>
            </div>
            <div className="row">
                <Canvas/>
                <Zoom/>
            </div>
            <List/>
            <button className="next-step">Следующий шаг</button>
        </div>
    }
}
