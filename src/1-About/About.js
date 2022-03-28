import './about.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PDF_Icon from '../Media/Images/pdf.png'
import GoogleDocs_Icon from '../Media/Images/googleDocs.png'

function About() {
    const navigate = useNavigate()
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='about-container'>
            <div className="about-left-box">
                <h1 className="about-left-title">
                    <span id='letter_H'>H</span>
                    <span id='letter_i_one'>e</span>
                    <span id='letter_i_one'>l</span>
                    <span id='letter_i_one'>l</span>
                    <span id='letter_i_one'>o</span>
                    <span id='letter_comma_one'>,</span>
                    <br />
                    <span id='letter_I'>I</span>
                    <span id='letter_hyphen'>'</span>
                    <span id='letter_m'>m</span>&nbsp;
                    <span id='letter_D_one'>J</span>
                    <span id='letter_a'>o</span>
                    <span id='letter_v_one'>s</span>
                    <span id='letter_i_two'>h</span>
                    <span id='letter_d'>u</span>
                    <span id='letter_d'>a</span>
                    <span id='letter_comma_two'>,</span>
                    <br />
                    <span id='letter_W'>M</span>
                    <span id='letter_e_one'>e</span>
                    <span id='letter_e_one'>d</span>
                    <span id='letter_e_one'>i</span>
                    <span id='letter_e_one'>c</span>
                    <span id='letter_e_one'>a</span>
                    <span id='letter_b'>l</span>&nbsp;
                    <span id='letter_D_two'>S</span>
                    <span id='letter_e_two'>t</span>
                    <span id='letter_v_two'>u</span>
                    <span id='letter_e_three'>d</span>
                    <span id='letter_l'>e</span>
                    <span id='letter_o'>n</span>
                    <span id='letter_p'>t</span>
                </h1>
                <p className='about-left-description'>Software Engineer / Tech Enthusiast</p>
                <div className="about-left-button-box">
                    <button onClick={() => navigate('/contact')} className="about-contact-button">Contact me!</button>
                    <div className="about-resume-box">
                        <h2 className="about-resume-title">My Resume:</h2>
                        <div className="about-resume-buttons-wrapper">
                            <a href="David_Venegas_Resume.pdf" download><img src={PDF_Icon} alt="PDF" className="about-resume-pdf"/></a>
                            <a href="https://docs.google.com/document/d/1hePALiQVLoytmgKcoLG4KtkNFi6UeMQBSTLCf5gfZnc/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={GoogleDocs_Icon} alt="Google Docs" className="about-resume-googleDocs"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-right-box">
                <div className="about-right-title">About me</div>
                <p className='about-right-description'>
                I am a driven software engineer with a passion for programming and solving difficult problems.
                    <br /><br />Technology is something with which I've always felt a deep connection. I have high aspirations and am constantly striving to outdo myself with every <span onClick={() => navigate('/work')}>challenge</span> I undertake.
                    <br /><br />My goal is to join a team that is truly passionate about what they create and are proud to make the world a better place.
                </p>
            </div>
        </div>
    )
}

export default About
