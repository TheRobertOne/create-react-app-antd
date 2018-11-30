import React, { Component } from 'react';
// import logo from './logo.svg';

import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    <img src={img1} className="bg" alt="logo" />
                    <img src={img2} className="bg" alt="logo" />
                    <img src={img3} className="bg" alt="logo" />
                    <img src={img4} className="bg" alt="logo" />
                    <img src={img5} className="bg" alt="logo" />
                    <img src={img6} className="bg" alt="logo" />
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                {/*</header>*/}
            </div>
        );
    }
}

export default App;
