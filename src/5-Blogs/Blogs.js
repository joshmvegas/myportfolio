import './blogs.css'
import { useEffect, useState } from 'react'
import ReactBanner from '../Images/blog-banners/react-banner.jpg'
import JavascriptBanner from '../Images/blog-banners/javascript-banner.jpg'
import RubyBanner from '../Images/blog-banners/ruby-banner.jpg'

function Blogs() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [blog1, setBlog1] = useState(true)
    const [blog2, setBlog2] = useState(false)
    const [blog3, setBlog3] = useState(false)
    function handleBlog1() {
        setBlog1(true)
        setBlog2(false)
        setBlog3(false)
    }
    function handleBlog2() {
        setBlog1(false)
        setBlog2(true)
        setBlog3(false)
    }
    function handleBlog3() {
        setBlog1(false)
        setBlog2(false)
        setBlog3(true)
    }
    return (
        <div className='blogs-container'>
            <h1 className="blog-header">
                <span>J</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>n</span>
                <span>a</span>
                <span>l</span>&nbsp;
                <span>A</span>
                <span>r</span>
                <span>t</span>
                <span>i</span>
                <span>c</span>
                <span>l</span>
                <span>e</span>
                <span>s</span>
            </h1>
            <p className="blog-description">I constantly strive to keep myself informed. Here are a few things I've written.</p>
            <div className="blog-wrapper">
                <input type="radio" name="slider" id="blog-item-1" defaultChecked/>
                <input type="radio" name="slider" id="blog-item-2"/>
                <input type="radio" name="slider" id="blog-item-3"/>
                <div className="blog-cards">
                    <label style={blog1 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-1" id="blog-slide-1" onClick={() => handleBlog1()}>
                        <div className="blog-content">
                            <img className='blog-image' src={ReactBanner} alt="React Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog1 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasjoshua1/comparing-the-effects-of-distracting-sensory-stimulation-on-auditory-perception-using-auditory-864b851ce4a5' target="_blank" rel="noreferrer">Distracting Stimulation on Auditory Perception</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>Auditory processing is an important physiological aspect with regard to human functioning. This processing can be hindered by distractions, which can occur in multiple forms. This study analyzed the effect of multiple types of secondary sensory distractions, including visual, cognitive, and somatic motor stimulation, on auditory<span id='blogStartResponsive'> perception. These effects were analyzed by measuring the widths of a university student’s auditory evoked potential waves collected during</span>...&nbsp; <a style={blog1 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasjoshua1/comparing-the-effects-of-distracting-sensory-stimulation-on-auditory-perception-using-auditory-864b851ce4a5' target="_blank" rel="noreferrer">Read More</a></p>
                                </div>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Jun 27th, 2021</h4>
                                <h2 className="blog-read">11 Minute Read</h2>
                                <div className="blog-likes">
                                    <p>PHYSIOLOGY</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label style={blog2 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-2" id="blog-slide-2" onClick={() => handleBlog2()}>
                        <div className="blog-content">
                            <img className='blog-image' src={JavascriptBanner} alt="Javascript Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog2 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasjoshua1/covid-19-the-deadly-viruss-mechanism-epidemiology-transmission-prevention-and-prospective-b902729a27a' target="_blank" rel="noreferrer">COVID-19: The Virus’s Prospective Future</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>Over a year after the world began reeling from the effects of a tiny intracellular parasite, multiple questions and ongoing misconceptions remain. How does the virus work, and how does it spread? What is the difference between the testing methods, and what exactly are they testing? What do we know about the<span id='blogStartResponsive'> disease this virus causes, and perhaps most importantly, what can we do to prevent it? This written work addresses each of these issues using recently</span>...&nbsp; <a style={blog2 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasjoshua1/covid-19-the-deadly-viruss-mechanism-epidemiology-transmission-prevention-and-prospective-b902729a27a' target="_blank" rel="noreferrer">Read More</a></p>
                                </div>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Apr 4th, 2021</h4>
                                <h2 className="blog-read">23 Minute Read</h2>
                                <div className="blog-likes">
                                    <p>IMMUNOLOGY</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label style={blog3 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-3" id="blog-slide-3" onClick={() => handleBlog3()}>
                        <div className="blog-content">
                            <img className='blog-image' src={RubyBanner} alt="Ruby Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog3 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasjoshua1/comparing-electrical-activity-in-antagonistic-muscles-of-the-forearm-and-lower-leg-using-the-emg-20898bade821' target="_blank" rel="noreferrer">Electrical Activity in Antagonistic Muscles</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>Several electrodiagnostic tests are used to monitor and diagnose muscle abnormalities. Unfortunately, methods such as needle electromyography can be both invasive and painful. Surface electromyography, however, offers a less aggressive diagnostic alternative that can also be useful for<span id='blogStartResponsive'> detecting varying levels of activity in antagonistic skeletal muscles. In this experiment, two pairs of antagonistic muscles were monitored to assess the utility of</span>...&nbsp; <a style={blog3 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasjoshua1/comparing-electrical-activity-in-antagonistic-muscles-of-the-forearm-and-lower-leg-using-the-emg-20898bade821' target="_blank" rel="noreferrer">Read More</a></p>
                                </div>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Nov 23th, 2021</h4>
                                <h2 className="blog-read">13 Minute Read</h2>
                                <div className="blog-likes">
                                    <p>ANATOMY</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Blogs
