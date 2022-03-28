import './about.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PDF_Icon from '../Media/Images/pdf.png'

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
                    <span id='letter_M'>M</span>
                    <span id='letter_e_two'>e</span>
                    <span id='letter_d'>d</span>
                    <span id='letter_i'>i</span>
                    <span id='letter_c'>c</span>
                    <span id='letter_a_two'>a</span>
                    <span id='letter_l_three'>l</span>&nbsp;
                    <span id='letter_S'>S</span>
                    <span id='letter_t'>t</span>
                    <span id='letter_u_two'>u</span>
                    <span id='letter_d_two'>d</span>
                    <span id='letter_e_three'>e</span>
                    <span id='letter_n'>n</span>
                    <span id='letter_t_two'>t</span>
                </h1>
                <p className='about-left-description'>Pre-Med Undergrad / Science Enthusiast</p>
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
            <div className="about-right-box">
                <div className="about-right-title">About me</div>
                <p className='about-right-description'>
                I am a driven learner with a passion for medicine and a premedical degree from the accredited Bob Jones University.
                    <br /><br />Medicine is something with which I've always felt a deep connection. I have high aspirations and constantly strive to outdo myself and ultimately make the world a better place.
                    <br /><br /> I am excited for the breakthroughs and challenges that await as I experience the dawn of this new journey.
                </p>
            </div>
        </div>
    )
}

export default About
