import './skills.css'
import { useState, useEffect } from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs"
import { GiClick } from "react-icons/gi"
import LabImg from '../Media/Images/skills/lab.png'
import TechImg from '../Media/Images/skills/tech.png'
import ScienceImg from '../Media/Images/skills/science.png'
import WritingImg from '../Media/Images/skills/writing.png'
import FirstAidImg from '../Media/Images/skills/first_aid.png'
import EmotionImg from '../Media/Images/skills/emotion.png'
import DisciplineImg from '../Media/Images/skills/discipline.png'
import LeaderImg from '../Media/Images/skills/leader.png'
import CompassionImg from '../Media/Images/skills/compassion.png'
import IntegrityImg from '../Media/Images/skills/integrity.png'
import FlatironImg from '../Media/Images/flatiron_logo.png'
import ComptiaImg from '../Media/Images/comptia.png'
import AWSImg from '../Media/Images/aws.jpg'
import FlatironCert from '../Media/Images/flatiron_cert.png'
import AtlassianImg from '../Media/Images/atlassian.png'
import TypeWriterEffect from 'react-typewriter-effect'
import { useInView } from 'react-intersection-observer'

function Skills() {
    useEffect(() => window.scrollTo(0, 0), [])
    const [mouse1, setMouse1] = useState(false)
    const [mouse2, setMouse2] = useState(false)
    const [mouse3, setMouse3] = useState(false)
    const [mouse4, setMouse4] = useState(false)
    const [cert, setCert] = useState(false)
    const [edSepRef, edSepInView] = useInView({threshold: 0, triggerOnce: true})
    const [edTitleRef, edTitleInView] = useInView({threshold: 0, triggerOnce: true})
    const [ed1Ref, ed1InView] = useInView({threshold: 0, triggerOnce: true})
    const [ed2Ref, ed2InView] = useInView({threshold: 0, triggerOnce: true})
    const [ed3Ref, ed3InView] = useInView({threshold: 0, triggerOnce: true})
    const [ed4Ref, ed4InView] = useInView({threshold: 0, triggerOnce: true})
    return (
        <div className='skills-container'>
            <div className="skills-wrapper">
                <h1 className="skills-header">
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>f</span>
                    <span>i</span>
                    <span>c</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>i</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <p className="skills-description">
                    <TypeWriterEffect startDelay={1000} cursorColor="white" text="I love to learn and enjoy applying myself to new things." typeSpeed={35} hideCursorAfterText={true}/>&nbsp;&nbsp;
                    <span id="skillsMobileSecond"><TypeWriterEffect startDelay={4000} cursorColor="white" text="Here are a few of my strongest skillsets." typeSpeed={35} hideCursorAfterText={true}/></span>
                </p>
                <div className="skills-box">
                    <h1 className="skills-title">Hard Skills</h1>
                    <div className="skills-content">
                        <div id="ReactSkill" className="skills-item">
                            <img src={LabImg} alt="Lab Operation" />
                            <h2>Lab Operation</h2>
                            <p>I use React on a daily basis for nearly everything I do</p>
                        </div>
                        <div id="ReactSkill" className="skillSeparator"></div>
                        <div id="ReduxSkill" className="skills-item">
                            <img src={TechImg} alt="Technical Acuity" />
                            <h2>Technical Acuity</h2>
                            <p>My best friend when building large-scale applications</p>
                        </div>
                        <div id="ReduxSkill" className="skillSeparator"></div>
                        <div id="JavascriptSkill" className="skills-item">
                            <img src={ScienceImg} alt="The Sciences" />
                            <h2>The Sciences</h2>
                            <p>The duct tape of the Internet and my first love</p>
                        </div>
                        <div id="JavascriptSkill" className="skillSeparator hiddenSkillSeparator"></div>
                        <div id="RubySkill" className="skills-item responsiveSkillsItem1">
                            <img src={WritingImg} alt="Creative Writing" />
                            <h2>Creative Writing</h2>
                            <p>Dynamic and simplistic - my first programming language</p>
                        </div>
                        <div id="RubySkill" className="skillSeparator responsiveSkillsItem2"></div>
                        <div id="CSSSkill" className="skills-item responsiveSkillsItem3">
                            <img src={FirstAidImg} alt="First Aid" />
                            <h2>First Aid</h2>
                            <p>I utilize CSS to bring an attractive look and feel to my work</p>
                        </div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1 className="skills-title">Soft Skills</h1>
                    <div className="skills-content">
                        <div id="NodeSkill" className="skills-item">
                            <img src={EmotionImg} alt="Emotional Stability" />
                            <h2>Emotion Stability</h2>
                            <p>I use Node to get data-intensive, real-time backends up and running fast</p>
                        </div>
                        <div id="NodeSkill" className="skillSeparator"></div>
                        <div id="MongoDBSkill" className="skills-item">
                            <img src={DisciplineImg} alt="Discipline" />
                            <h2>Discipline</h2>
                            <p>Mongoose's flexibility allows me to create complex data models with ease</p>
                        </div>
                        <div id="MongoDBSkill" className="skillSeparator"></div>
                        <div id="SQLSkill" className="skills-item">
                            <img src={LeaderImg} alt="Leadership" />
                            <h2>Leadership</h2>
                            <p>I am well versed in SQL development - from queries to schemas</p>
                        </div>
                        <div id="SQLSkill" className="skillSeparator hiddenSkillSeparator"></div>
                        <div id="RubyonRailsSkill" className="skills-item responsiveSkillsItem1">
                            <img src={CompassionImg} alt="Compassion" />
                            <h2>Compassion</h2>
                            <p>I have a solid understanding of Rails MVC and Active Record</p>
                        </div>
                        <div id="RubyonRailsSkill" className="skillSeparator responsiveSkillsItem2"></div>
                        <div id="FirebaseSkill" className="skills-item responsiveSkillsItem3">
                            <img src={IntegrityImg} alt="Ethical Integrity" />
                            <h2>Ethical Integrity</h2>
                            <p>A highly versatile NoSQL database - I'm also adept at its Storage and Auth systems</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-separator" ref={edSepRef} id={edSepInView ? "education-separator-active" : undefined}></div>
            <div className="education-wrapper">
                <h1 className="education-header" ref={edTitleRef} id={edTitleInView ? "certTitle-active" : undefined}>
                    <span>E</span>
                    <span>d</span>
                    <span>u</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>&nbsp;
                    <span>a</span>
                    <span>n</span>
                    <span>d</span>&nbsp;
                    <span>C</span>
                    <span>e</span>
                    <span>r</span>
                    <span>t</span>
                    <span>i</span>
                    <span>f</span>
                    <span>i</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                    <span>s</span>
                </h1>
                <div className="cert-items">
                    <div className="flatiron-item" ref={ed1Ref} id={ed1InView ? "cert1-active" : undefined} onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>
                        <div className="flatiron-img-wrapper" onMouseEnter={() => setMouse1(false)} onMouseLeave={() => setMouse1(true)} onClick={() => setCert(!cert)}>
                            <div className="flatiron-images">
                                <img className="flatiron-img" src={FlatironImg} alt="Flatiron" style={cert ? {opacity: "0"} : {opacity: "1"}}/>
                                <img className="flatiron-img" src={FlatironCert} alt="Flatiron" style={cert ? {opacity: "1"} : {opacity: "0"}}/>
                            </div>
                            <GiClick id={mouse1 ? "flatiron-pointer" : "flatiron-pointer-gone"}/>
                            <div className="flatiron-img-hover-box">
                                <h1 style={cert ? {opacity: "1"} : {opacity: "0"}}>Click to hide certificate</h1>
                                <h1 style={cert ? {opacity: "0"} : {opacity: "1"}}>Click to view certificate</h1>
                            </div>
                        </div>
                        <div className="flatiron-text-box">
                            <h3>Greenville, South Carolina</h3>
                            <h1>B.S. Pre-Med/Pre-Dental</h1>
                            <h4>BOB JONES UNIVERSITY</h4>
                            <p>A highly acknowledged Software Engineering trade school and proven leader in tech education.</p>
                            <div className="flatiron-description-box">
                                <p>Some things I did as a student:</p>
                                <ul>
                                    <li>Studied coding best practices</li>
                                    <li>Collaborated on projects as a team</li>
                                    <li>Engaged in pair programming with my peers</li>
                                    <li>Learned proper ways to tackle complex problems</li>
                                </ul>
                            </div>
                            <p>I spent 16 weeks full time & in-person at Flatiron School during which I actively improved my skills with 500+ hours of live coding experience.</p>
                        </div>
                    </div>
                    <div ref={ed2Ref} className="cert-item" id={ed2InView ? "cert2-active" : undefined} onMouseEnter={() => setMouse2(true)} onMouseLeave={() => setMouse2(false)}>
                        <a href="https://www.credly.com/badges/7414c8a3-6315-4711-b4a3-ead2b9720a2d" target="_blank" rel="noreferrer">
                            <div className="cert-img-wrapper" onMouseEnter={() => setMouse2(false)} onMouseLeave={() => setMouse2(true)}>
                                <img className='cert-img' src={AWSImg} alt="AWS" />
                                <GiClick id={mouse2 ? "cert-pointer" : "cert-pointer-gone"}/>
                                <div className="cert-img-hover-box">
                                    <h1>View certificate</h1>
                                    <BsBoxArrowUpRight id='cert-arrow'/>
                                </div>
                            </div>
                        </a>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>Certified Cloud Practitioner</h1>
                            <p>The foundational accreditation from the world's largest cloud provider. Cloud technology is expanding at an incredible pace and I intend to earn many more qualifications in the near future.</p>
                        </div>
                    </div>
                    <div ref={ed3Ref} className="cert-item" id={ed3InView ? "cert3-active" : undefined} onMouseEnter={() => setMouse3(true)} onMouseLeave={() => setMouse3(false)}>
                        <a href="https://www.credly.com/badges/533f456d-e121-4340-b831-cc361012ce59" target="_blank" rel="noreferrer">
                            <div className="cert-img-wrapper" onMouseEnter={() => setMouse3(false)} onMouseLeave={() => setMouse3(true)}>
                                <img className='cert-img' src={ComptiaImg} alt="Comptia Security +" />
                                <GiClick id={mouse3 ? "cert-pointer" : "cert-pointer-gone"}/>
                                <div className="cert-img-hover-box">
                                    <h1>View certificate</h1>
                                    <BsBoxArrowUpRight id='cert-arrow'/>
                                </div>
                            </div>
                        </a>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>CompTiA Security +</h1>
                            <p>A globally recognized certification that validates the baseline skills necessary to perform core security functions. Cybersecurity is a vital aspect of the modern internet and something I care deeply about.</p>
                        </div>
                    </div>
                    <div ref={ed4Ref} className="cert-item" id={ed4InView ? "cert4-active" : undefined} onMouseEnter={() => setMouse4(true)} onMouseLeave={() => setMouse4(false)}>
                        <a href="https://university.atlassian.com/student/award/SzMgzKvEBivKWJWuomUu2PR5" target="_blank" rel="noreferrer">
                            <div className="cert-img-wrapper" onMouseEnter={() => setMouse4(false)} onMouseLeave={() => setMouse4(true)}>
                                <img className='cert-img' src={AtlassianImg} alt="Jira Fundamentals" />
                                <GiClick id={mouse4 ? "cert-pointer" : "cert-pointer-gone"}/>
                                <div className="cert-img-hover-box">
                                    <h1>View certificate</h1>
                                    <BsBoxArrowUpRight id='cert-arrow'/>
                                </div>
                            </div>
                        </a>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>Jira Fundamentals</h1>
                            <p>I earned a perfect score on Atlassian University's Jira Fundamentals certification. Atlassian is the leader in SCRUM/agile managment software with their products used by <a href='https://www.linkedin.com/pulse/83-fortune-500-companies-use-atlassian-products-divyanshu-raj-/' target="_blank" rel="noreferrer">83%</a> of Fortune 500 companies.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="note-wrapper">
                <p><span>*</span> While I don't have a computer science degree, I do have a working understanding of the theory and math behind the code. I've completed Harvard's CS50, finished numerous of MIT's Computer Science courses, taken advanced math courses and much more. I'm passionate about the fundamentals of programming - not just at the surface level, and I believe that dedication will show.</p>
            </div>
        </div>
    )
}

export default Skills
