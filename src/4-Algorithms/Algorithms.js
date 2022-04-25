import './algorithms.css'
import { useEffect } from 'react'

function Algorithms() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='algo-container'>
            <h1 className="algo-header">
                        <span>E</span>
                        <span>x</span>
                        <span>t</span>
                        <span>r</span>
                        <span>a</span>
                        <span>c</span>
                        <span>u</span>
                        <span>r</span>
                        <span>r</span>
                        <span>i</span>
                        <span>c</span>
                        <span>u</span>
                        <span>l</span>
                        <span>a</span>
                        <span>r</span>
                        <span>s</span>
                </h1>
                <p className="algo-description">
                    <div id='algo-slide1'>"Don't follow where the path may lead.&nbsp;&nbsp;</div> 
                    <div id='algo-slide2'> 
                        <span id='algo-child-slide'>Go instead where there is no path and leave a trail."<span id='ralph_waldo_emerson'> &nbsp;—Ralph Waldo Emerson.</span></span>
                    </div>
                </p>
                <div className="algo-wrapper">
                    <div id='algoJavascript' className="algo-item algo-item1">
                        <div className="algo-title-box">
                            <p>Javascript</p>
                            <p>3 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                        </div>
                    </div>
                    <div id='algoRuby' className="algo-item algo-item2">
                        <div className="algo-title-box">
                            <p>Ruby</p>
                            <p>1 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                        </div>
                    </div>
                    <div id='algoJavascriptRuby' className="algo-item algo-item3">
                        <div className="algo-title-box">
                            <p>Javascript <span>&</span> <span>Ruby</span></p>
                            <p>2 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                        </div>
                    </div>
                    <div id='algoJavascript' className="algo-item algo-item4">
                        <div className="algo-title-box">
                            <p>Javascript</p>
                            <p>1 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Algorithms
