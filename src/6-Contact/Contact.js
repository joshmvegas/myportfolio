import './contact.css'
import { useEffect, useRef, useState } from 'react'
import { VscCopy } from 'react-icons/vsc'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

function Contact() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [copied, setCopied] = useState(false)
    const formRef = useRef()

    function sendEmail(e) {
        e.preventDefault()
        Swal.fire({
            title: 'Your message has been sent',
            color: '#f5f5f5',
            icon: 'success',
            background: '#444',
            backdrop: `rgba(0,0,0,0.5)`
        })
        emailjs.sendForm('service_a2avd1f', 'template_4hjtm3e', formRef.current, 'N7KmmM_xVJaXXWuEA')
        .then(console.log(formRef))
        .then(e.target.reset())
        .catch (error => console.log(error.text))
    }

    function handleCopy() {
        let clearPopup = setTimeout(() => setCopied(false), 1500)
        copied && clearTimeout(clearPopup)
        setCopied(true)
        navigator.clipboard.writeText("venegasjoshua1@gmail.com")
    }

    return (
        <div className='contact-container'>
            <div className="contact-left-box">
                <h1 className="contact-title">
                    <span id='cLetter_c1'>C</span>
                    <span id='cLetter_o'>o</span>
                    <span id='cLetter_n'>n</span>
                    <span id='cLetter_t1'>t</span>
                    <span id='cLetter_a'>a</span>
                    <span id='cLetter_c2'>c</span>
                    <span id='cLetter_t2'>t</span>&nbsp;
                    <span id='cLetter_m'>M</span>
                    <span id='cLetter_e'>e</span>
                </h1>
                <p className="contact-message contactForm1">
                    I currently reside in Greenville, SC. If you have any questions or advice for an aspiring physician, feel free to contact me! You can email me directly, or just fill out the form below.
                </p>
                <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                    <ul>
                        <li className='contact-item contactForm2' id='contact-half-left'>
                            <input type="text" placeholder='Name' name="from_name"/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item contactForm3' id='contact-half-right'>
                            <input type="email" placeholder='Email' name="from_email" required/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item contactForm4' id='contact-subject'>
                            <input id='contact-third-child' type="text" placeholder='Subject' name="subject"/>
                            <span className="contact-after"></span>
                        </li>
                        <li className='contact-item contactForm5'>
                            <textarea placeholder='Message' name="message" required/>
                            <span className="contact-after"></span>
                        </li>
                    </ul>
                    <button className='contactForm6' type="submit">Send message!</button>
                </form>
                <div className="contact-aside contactForm7">
                    <p id='contact-copy-top'>Or email me directly at:</p>
                    <div className="contact-copy-wrap">
                        <div className='contact-copy-box'><VscCopy onClick={() => handleCopy()} id='contact-copy-icon'/><p id='contact-copy-email'>venegasjoshua1@gmail.com</p></div>
                        <div className='contact-popup' id={copied ? "contact-popup-show" : undefined}>Copied!</div>
                    </div>
                </div>
            </div>
            <div className="contact-right-box">
            <div className="contact-right-cover"></div>
                <div className="map-popup">
                    <p>Joshua Venegas</p>
                    <p>venegasjoshua1@gmail.com</p>
                    <p>1-803-727-2627</p>
                    <p>Greenvile, SC - USA</p>
                </div>
                <div className="map-wrapper">
                    <iframe title='Contact Map' src="https://snazzymaps.com/embed/390453" width="100%" height="100%" style={{border: "none"}}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
