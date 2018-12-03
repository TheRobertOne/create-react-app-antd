import React, { Component } from 'react';
import { Parallax, OverPack } from 'rc-scroll-anim';
// import logo from './logo.svg';

// import img1 from './img/img1.png';
// import img2 from './img/img2.png';
// import img3 from './img/img3.png';
// import img4 from './img/img4.png';
// import img5 from './img/img5.png';
// import img6 from './img/img6.png';

import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: ''
        };
        this.changeRem = this.changeRem.bind(this)
    }
    componentWillMount () {
        const that = this
        window.addEventListener('pageshow', function () {
            console.log(123, that)
            that.changeRem();
        });
        window.addEventListener('resize', function () {
            const that = this
            that.changeRem();
        });
    }
    changeRem() {
        document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 1920 * 100 + 'px';
    }
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*<Parallax*/}
                  {/*animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}*/}
                  {/*style={{ transform: 'translateX(-100px)', opacity: 0 }}*/}
                  {/*className="code-box-shape" />*/}
                    {/*<img src={logo} className="logo" alt="logo" />*/}
                {/*</Parallax>*/}
                <div className='banner banner1'>
                    <img src="https://courses.abctime-me.com/abcTime-h5/official-website/pc/img1.png" className="bg" alt="banner1" />
                    <div class="banner1Title1">世界名校外教课</div>
                    <div class="banner1Title2">宝宝都爱学的英语启蒙课程</div>
                    <div class="banner1Title3">适合3-6岁宝宝</div>
                </div>
                <div className='banner banner2'>
                    <img src="https://courses.abctime-me.com/abcTime-h5/official-website/pc/img2.png" className="bg" alt="banner2" />
                </div>
                <div className='banner banner3'>
                    <img src="https://courses.abctime-me.com/abcTime-h5/official-website/pc/img3.png" className="bg" alt="banner3" />
                </div>
                <div className='banner banner4'>
                    <img src="https://courses.abctime-me.com/abcTime-h5/official-website/pc/img4.png" className="bg" alt="banner4" />
                </div>
                <div className='banner banner5'>
                    <img src="https://courses.abctime-me.com/abcTime-h5/official-website/pc/img5.png" className="bg" alt="banner5" />
                </div>
                <div className='banner banner6'>
                    <img src="https://courses.abctime-me.com/abcTime-h5/official-website/pc/img6.png" className="bg" alt="banner6" />
                </div>
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
