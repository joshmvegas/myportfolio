import './about.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PDF_Icon from '../Images/pdf.png'
import PortraitImg from '../Images/portrait.png'

function About() {
    const navigate = useNavigate()
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='about-container'>
            <div className="about-left-box">
                <h1 className="about-left-title">
                    <span id='letter_H'>H</span>
                    <span id='letter_e'>e</span>
                    <span id='letter_l'>l</span>
                    <span id='letter_l_two'>l</span>
                    <span id='letter_o'>o</span>
                    <span id='letter_comma'>,</span>
                    <br />
                    <span id='letter_I'>I</span>
                    <span id='letter_hyphen'>'</span>
                    <span id='letter_m'>m</span>&nbsp;
                    <span id='letter_J'>J</span>
                    <span id='letter_o_two'>o</span>
                    <span id='letter_s'>s</span>
                    <span id='letter_h'>h</span>
                    <span id='letter_u'>u</span>
                    <span id='letter_a'>a</span>
                    <span id='letter_comma_two'>,</span>
                    <br />
                    <span id='letter_P'>B</span>
                    <span id='letter_r'>.</span>
                    <span id='letter_e_two'>S</span>
                    <span id='letter_hyphen_two'>.</span>&nbsp;
                    <span id='letter_M_two'>P</span>
                    <span id='letter_e_three'>r</span>
                    <span id='letter_d'>e</span>
                    <span id='letter_U_two'>-</span>
                    <span id='letter_n'>M</span>
                    <span id='letter_d_two'>e</span>
                    <span id='letter_e_four'>d</span>
                    <span id='letter_r_two'>i</span>
                    <span id='letter_g'>c</span>
                    <span id='letter_r_three'>a</span>
                    <span id='letter_a_two'>l</span>
                </h1>
                <p className='about-left-description'>Lab Assistant / Crisis Counselor</p>
                <div className="about-left-button-box">
                    <button onClick={() => navigate('/contact')} className="about-contact-button">Contact me!</button>
                    <div className="about-resume-box">
                        <h2 className="about-resume-title">Download my CV:</h2>
                        <div className="about-resume-buttons-wrapper">
                            <a href="Joshua_Venegas_CV.pdf" download><img src={PDF_Icon} alt="PDF" className="about-resume-pdf"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-middle-separator"></div>
            <div className="about-right-box">
                <div className="about-right-title"><img src={PortraitImg} alt="Portrait"/></div>
                <p className='about-right-description'>
                I'm a driven learner with a passion for medicine and a commitment to Christ. The intricate design of the human body has always faascinated me - I love every chance I get to explore its complexity.
                <br /><br /> My goals are a combination of high aspirations and a commitment to serve my community, yet I'm most content when learning from mentors in the classroom and in medical settings. I'm excited for the breakthroughs and challenges that await as I begin my journey to medical school and beyond.
                </p>
            </div>
        </div>
    )
}

export default About
