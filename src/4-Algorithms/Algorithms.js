import './algorithms.css'
import { useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa"
import biologyImg from '../Images/extracurricular-icons/biology.jpg'
import bloodImg from '../Images/extracurricular-icons/blood.png'
import cookingImg from '../Images/extracurricular-icons/cooking.png'
import crisisImg from '../Images/extracurricular-icons/crisis.png'
import discipleshipImg from '../Images/extracurricular-icons/discipleship.png'
import languageImg from '../Images/extracurricular-icons/language.png'
import magicImg from '../Images/extracurricular-icons/magic.jpg'
import medexImg from '../Images/extracurricular-icons/medex.png'
import prezImg from '../Images/extracurricular-icons/prez.png'
import sportsImg from '../Images/extracurricular-icons/sports.png'
import yardCareImg from '../Images/extracurricular-icons/yard_care.png'
import yearbookImg from '../Images/extracurricular-icons/yearbook.png'

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
                            <p>Volunteering</p>
                            <p>4 Categories</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                            <div className="extracurricular-box-wrapper">
                                <div className="extracurricular-item">
                                    <img src={crisisImg} alt="" />
                                    <h2>Crisis Counselor</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div className="extracurricular-item">
                                    <img src={bloodImg} alt="" />
                                    <h2>Blood Donor Ambassador</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div className="extracurricular-item">
                                    <img src={yearbookImg} alt="" />
                                    <h2>University Yearbook Writer</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div className="extracurricular-item">
                                    <img src={medexImg} alt="" />
                                    <h2>MedEx Campus Ambassador</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='algoRuby' className="algo-item algo-item2">
                        <div className="algo-title-box">
                            <p>Interests</p>
                            <p>4 Categories</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                            <div className="extracurricular-box-wrapper">
                                <div className="extracurricular-item">
                                    <img src={sportsImg} alt="" />
                                    <h2>Sports & Fitness</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div className="extracurricular-item">
                                    <img src={magicImg} alt="" />
                                    <h2>Sleight-of-Hand Magic</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div className="extracurricular-item">
                                    <img src={languageImg} alt="" />
                                    <h2>Foreign Language</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div className="extracurricular-item">
                                    <img src={cookingImg} alt="" />
                                    <h2>Culinary Arts</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='algoNotJavascript' className="algo-item algo-item3">
                        <div className="algo-title-box">
                            <p>Leadership</p>
                            <p>2 Categories</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                            <div className="extracurricular-box-wrapper">
                                <div id='extracurricularTabNumTwo' className="extracurricular-item">
                                    <img src={prezImg} alt="" />
                                    <h2>BJU PMA President</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div id='extracurricularTabNumTwo' className="extracurricular-item">
                                    <img src={discipleshipImg} alt="" />
                                    <h2>Discipleship Group Leader</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='algoDefNotJavascript' className="algo-item algo-item4">
                        <div className="algo-title-box">
                            <p>Work</p>
                            <p>2 Categories</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            {/* STUFF GOES HERE */}
                            <div className="extracurricular-box-wrapper">
                                <div id='extracurricularTabNumTwo' className="extracurricular-item">
                                    <img src={yardCareImg} alt="" />
                                    <h2>Proprietor of Venegas Yard Care</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                                <div id='extracurricularTabNumTwo' className="extracurricular-item">
                                    <img src={biologyImg} alt="" />
                                    <h2>Head Biology Lab Assistant</h2>
                                    <div className="extracurricular-tab-box">
                                        <FaChevronRight id='extracurricular-tab'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Algorithms
