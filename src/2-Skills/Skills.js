import './skills.css'
import { useEffect } from 'react'
import LabImg from '../Images/skills/lab.png'
import TechImg from '../Images/skills/tech.png'
import ScienceImg from '../Images/skills/science.png'
import WritingImg from '../Images/skills/writing.png'
import FirstAidImg from '../Images/skills/first_aid.png'
import EmotionImg from '../Images/skills/emotion.png'
import DisciplineImg from '../Images/skills/discipline.png'
import LeaderImg from '../Images/skills/leader.png'
import CompassionImg from '../Images/skills/compassion.png'
import IntegrityImg from '../Images/skills/integrity.png'
import FlatironImg from '../Images/flatiron_logo.png'
import ComptiaImg from '../Images/comptia.png'
import AWSImg from '../Images/aws.png'
import AtlassianImg from '../Images/atlassian.png'
import TypeWriterEffect from 'react-typewriter-effect'
import { useInView } from 'react-intersection-observer'

function Skills() {
    useEffect(() => window.scrollTo(0, 0), [])
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
                    <TypeWriterEffect startDelay={1000} cursorColor="white" text="'Live as if you were to die tommorrow." typeSpeed={35} hideCursorAfterText={true}/>&nbsp;&nbsp;
                    <span id="skillsMobileSecond"><TypeWriterEffect startDelay={3000} cursorColor="white" text="Learn as if you were to live forever.' —Mahatma Ghandi" typeSpeed={35} hideCursorAfterText={true}/></span>
                </p>
                <div className="skills-box">
                    <h1 className="skills-title">Hard Skills</h1>
                    <div className="skills-content">
                        <div id="ReactSkill" className="skills-item">
                            <img src={LabImg} alt="Lab Operation" />
                            <h2>Lab Operation</h2>
                            <p>Serving here for years has made the lab my second home</p>
                        </div>
                        <div id="ReactSkill" className="skillSeparator"></div>
                        <div id="ReduxSkill" className="skills-item">
                            <img src={TechImg} alt="Technical Acuity" />
                            <h2>Technical Acuity</h2>
                            <p>Harmonizing mind and machinery to maximize efficiency</p>
                        </div>
                        <div id="ReduxSkill" className="skillSeparator"></div>
                        <div id="JavascriptSkill" className="skills-item">
                            <img src={ScienceImg} alt="The Sciences" />
                            <h2>The Sciences</h2>
                            <p>Driven by a deep fascination with biological function</p>
                        </div>
                        <div id="JavascriptSkill" className="skillSeparator hiddenSkillSeparator"></div>
                        <div id="RubySkill" className="skills-item responsiveSkillsItem1">
                            <img src={WritingImg} alt="Creative Writing" />
                            <h2>Creative Writing</h2>
                            <p>Words are my obsession - so simple, yet so powerful</p>
                        </div>
                        <div id="RubySkill" className="skillSeparator responsiveSkillsItem2"></div>
                        <div id="CSSSkill" className="skills-item responsiveSkillsItem3">
                            <img src={FirstAidImg} alt="First Aid" />
                            <h2>First Aid</h2>
                            <p>Effective preparation is key to helping minimize tragedy</p>
                        </div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1 className="skills-title">Soft Skills</h1>
                    <div className="skills-content">
                        <div id="NodeSkill" className="skills-item">
                            <img src={EmotionImg} alt="Emotional Stability" />
                            <h2>Stability</h2>
                            <p>A commitment to staying calm, competent, and productive through adversity</p>
                        </div>
                        <div id="NodeSkill" className="skillSeparator"></div>
                        <div id="MongoDBSkill" className="skills-item">
                            <img src={DisciplineImg} alt="Discipline" />
                            <h2>Discipline</h2>
                            <p>A critical quality for every area of my life, from academics to diet and fitness</p>
                        </div>
                        <div id="MongoDBSkill" className="skillSeparator"></div>
                        <div id="SQLSkill" className="skills-item">
                            <img src={LeaderImg} alt="Leadership" />
                            <h2>Leadership</h2>
                            <p>See one, do one, teach one. A visionary development of myself and others</p>
                        </div>
                        <div id="SQLSkill" className="skillSeparator hiddenSkillSeparator"></div>
                        <div id="RubyonRailsSkill" className="skills-item responsiveSkillsItem1">
                            <img src={CompassionImg} alt="Compassion" />
                            <h2>Compassion</h2>
                            <p>Not just a quality, but a practice of healing essential for any physician</p>
                        </div>
                        <div id="RubyonRailsSkill" className="skillSeparator responsiveSkillsItem2"></div>
                        <div id="FirebaseSkill" className="skills-item responsiveSkillsItem3">
                            <img src={IntegrityImg} alt="Ethical Integrity" />
                            <h2>Ethical Integrity</h2>
                            <p>The best reputation is an incorruptible one, for a man is what he does</p>
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
                    <div className="flatiron-item" ref={ed1Ref} id={ed1InView ? "cert1-active" : undefined}>
                        <div className="flatiron-img-wrapper">
                            <div className="flatiron-images">
                                <img className="flatiron-img" src={FlatironImg} alt="Flatiron"/>
                            </div>
                        </div>
                        <div className="flatiron-text-box">
                            <h3>Greenville, South Carolina</h3>
                            <h1>B.S. Pre-Med/Pre-Dent</h1>
                            <h4>BOB JONES UNIVERSITY</h4>
                            <p>A highly acknowledged & accredited liberal arts university and proven leader in Pre-Medical education.</p>
                            <div className="flatiron-description-box">
                                <p>Some things I did as a student:</p>
                                <ul>
                                    <li>Built a thorough framework for critical thinking</li>
                                    <li>Collaborated on papers and presentations with a team</li>
                                    <li>Engaged in medical ethics training</li>
                                    <li>Earned the equivalent of a Biology major with a Chemistry minor</li>
                                </ul>
                            </div>
                            <p>By May 2023, I will have spent 4 years full time at Bob Jones University. I am deeply grateful for the devoted peers and professors that make this experience so valuable.</p>
                        </div>
                    </div>
                    <div ref={ed2Ref} className="cert-item" id={ed2InView ? "cert2-active" : undefined}>
                        <div className="cert-img-wrapper">
                            <img className='cert-img' src={AWSImg} alt="AWS" />
                        </div>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>Professional Rescuer - Lifeguarding</h1>
                            <p>A foundational accreditation from the world's largest non-profit emergency assistance organization. This certification includes basic life support training with first aid, CPR, and AED.</p>
                        </div>
                    </div>
                    <div ref={ed3Ref} className="cert-item" id={ed3InView ? "cert3-active" : undefined}>
                        <div className="cert-img-wrapper">
                            <img className='cert-img' src={ComptiaImg} alt="Comptia Security +" />
                        </div>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>Crisis Counselor</h1>
                            <p>Issued by an international crisis hotline, this certification involves 6 weeks of training in empathetic communication. I've learned many valuable lessons for patient interaction in 400+ hours & counting with CTL.</p>
                        </div>
                    </div>
                    <div ref={ed4Ref} className="cert-item" id={ed4InView ? "cert4-active" : undefined}>
                        <div className="cert-img-wrapper">
                            <img className='cert-img' src={AtlassianImg} alt="Jira Fundamentals" />
                        </div>
                        <div className="cert-text-box">
                            <h1 className='cert-title'>QPR Suicide Prevention</h1>
                            <p>Question, Persuade, Refer. By partnering with Mental Health America to address mental health conditions in their earliest stages, I work to avert critical situations that can lead to irreversible decisions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills