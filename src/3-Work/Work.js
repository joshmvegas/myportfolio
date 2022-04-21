import './work.css'
import './otheritem.css'
import OtherItem from './OtherItem'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Modal from './Modal/Modal'
import { useInView } from 'react-intersection-observer'
// Main Logos
import OneLogo from '../Images/portfolio-logos/1.png'
import TwoLogo from '../Images/portfolio-logos/2.png'
import ThreeLogo from '../Images/portfolio-logos/3.png'
// Other Logos
import NumOne from '../Images/other-work-icons/1.png'
import NumTwo from '../Images/other-work-icons/2.png'
import NumThree from '../Images/other-work-icons/3.png'
import NumFour from '../Images/other-work-icons/4.png'
import NumFive from '../Images/other-work-icons/5.png'
import NumSix from '../Images/other-work-icons/6.png'
import NumSeven from '../Images/other-work-icons/7.png'
import NumEight from '../Images/other-work-icons/8.png'
import NumNine from '../Images/other-work-icons/9.png'
import NumTen from '../Images/other-work-icons/10.png'
import NumEleven from '../Images/other-work-icons/11.png'
import NumTwelve from '../Images/other-work-icons/12.png'

function Work() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    // const navigate = useNavigate()
    const [modalID, setModalID] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [otherSepRef, otherSepInView] = useInView({threshold: 0, triggerOnce: true})
    const [otherTitleRef, otherTitleInView] = useInView({threshold: 0, triggerOnce: true})
    const [otherDescRef, otherDescInView] = useInView({threshold: 0, triggerOnce: true})
    const otherData = [
        {id: 1, title: 'Week One', image: NumOne, github: "https://github.com/davidmvenegas/weather_app", link: "https://davidmvenegas.github.io/weather_app"},
        {id: 2, title: 'Week Two', image: NumTwo, github: "https://github.com/davidmvenegas/booklist", link: "https://davyvegasbooklist.com"},
        {id: 3, title: 'Week Three', image: NumThree, github: "https://github.com/davidmvenegas/coin-flip", link: "https://davidmvenegas.github.io/coin-flip"},
        {id: 4, title: 'Week Four', image: NumFour, github: "https://github.com/davidmvenegas/ticTacToe-Game", link: "https://davidmvenegas.github.io/ticTacToe-Game"},
        {id: 5, title: 'Week Five', image: NumFive, github: "https://github.com/davidmvenegas/calculator", link: "https://davidmvenegas.github.io/calculator"},
        {id: 6, title: 'Week Six', image: NumSix, github: "https://github.com/davidmvenegas/rock-paper-scissors", link: "https://davidmvenegas.github.io/rock-paper-scissors"},
        {id: 7, title: 'Week Seven', image: NumSeven, github: "https://github.com/davidmvenegas/JS-Quiz", link: "https://davidmvenegas.github.io/JS-Quiz"},
        {id: 8, title: 'Week Eight', image: NumEight, github: "https://github.com/davidmvenegas/starbucks-home-page-clone", link: "https://davidmvenegas.github.io/starbucks-home-page-clone/"},
        {id: 9, title: 'Week Nine', image: NumNine, github: "https://github.com/davidmvenegas/burgerhouse", link: "https://davidmvenegas.github.io/burgerhouse"},
        {id: 10, title: 'Week Ten', image: NumTen, github: "https://github.com/davidmvenegas/notes-app", link: "https://davidmvenegas.github.io/notes-app"},
        {id: 11, title: 'Week Eleven', image: NumEleven, github: "https://github.com/davidmvenegas/PasswordGenerator", link: "https://davidmvenegas.github.io/PasswordGenerator"},
        {id: 12, title: 'Week Twelve', image: NumTwelve, github: "https://github.com/davidmvenegas/JS-CountdownTimer", link: "https://davidmvenegas.github.io/JS-CountdownTimer"},
    ]
    function handleOpenModal(id) {
        setModalID(id)
        setOpenModal(true)
    }
    return (
        <div className='work-container'>
            <Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID}/>
            <div className="port-wrapper">
                <h1 className="port-header">
                        <span>C</span>
                        <span>l</span>
                        <span>i</span>
                        <span>n</span>
                        <span>i</span>
                        <span>c</span>
                        <span>a</span>
                        <span>l</span>&nbsp;
                        <span>E</span>
                        <span>x</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                        <span>i</span>
                        <span>e</span>
                        <span>n</span>
                        <span>c</span>
                        <span>e</span>
                </h1>
                <p className="port-description">
                    <span>'Tell&nbsp;</span>
                    <span>me&nbsp;</span>
                    <span>and&nbsp;</span>
                    <span>I&nbsp;</span>
                    <span>forget,&nbsp;</span>
                    <span>teach&nbsp;</span>
                    <span>me&nbsp;</span>
                    <span>and&nbsp;</span>
                    <span>I&nbsp;</span>
                    <span>may&nbsp;</span>
                    <span>remember,&nbsp;</span>
                    <span>involve&nbsp;</span>
                    <span>me&nbsp;</span>
                    <span>and&nbsp;</span>
                    <span>I&nbsp;</span>
                    <span>learn.'&nbsp;</span>
                    <span>&nbsp;— Benjamin&nbsp;</span>
                    <span>Franklin&nbsp;</span>
                </p>
                <div className="port-items">
                    <div className="port-item" id='portItem1'>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif port-gif-logo' src={OneLogo} alt="My Simple Wardrobe Logo" />
                            </div>
                        </div>
                        <div className="port-text-box">
                            <h1 className="port-title">MedEx Academy</h1>
                            <p className="port-headline">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga cum voluptatibus magnam recusandae voluptas totam beatae ullam fugiat sint quos porro.
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga cum voluptatibus magnam recusandae voluptas totam beatae ullam fugiat sint quos porro.
                            </p>
                            <div className="port-btn-box">
                                <div className='port-btn-more' onClick={() => handleOpenModal(1)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" id='portItem2'>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif port-gif-logo' src={TwoLogo} alt="Grocery Magix Logo" />
                            </div>
                        </div>
                        <div className="port-text-box">
                            <h1 className="port-title">Clinical Shadowing</h1>
                            <p className="port-headline">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga cum voluptatibus magnam recusandae voluptas totam beatae ullam fugiat sint quos porro.
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga cum voluptatibus magnam recusandae voluptas totam beatae ullam fugiat sint quos porro.
                            </p>
                            <div className="port-btn-box">
                                <div className='port-btn-more' onClick={() => handleOpenModal(2)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" id='portItem3'>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif port-gif-logo' src={ThreeLogo} alt="The Financial Tracker Logo" />
                            </div>
                        </div>
                        <div className="port-text-box">
                            <h1 className="port-title">Medical Internship</h1>
                            <p className="port-headline">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga cum voluptatibus magnam recusandae voluptas totam beatae ullam fugiat sint quos porro.
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga cum voluptatibus magnam recusandae voluptas totam beatae ullam fugiat sint quos porro.
                            </p>
                            <div className="port-btn-box">
                                <div className='port-btn-more' onClick={() => handleOpenModal(3)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="other-separator" ref={otherSepRef} id={otherSepInView ? "education-separator-active" : undefined}></div>
            <div className="other-wrapper">
                <h1 className="other-header" ref={otherTitleRef} id={otherTitleInView ? "certTitle-active" : undefined}>
                        <span>T</span>
                        <span>h</span>
                        <span>e</span>&nbsp;
                        <span>M</span>
                        <span>e</span>
                        <span>d</span>
                        <span>E</span>
                        <span>x</span>&nbsp;
                        <span>P</span>
                        <span>r</span>
                        <span>o</span>
                        <span>g</span>
                        <span>r</span>
                        <span>a</span>
                        <span>m</span>
                </h1>
                <p className="other-description" ref={otherDescRef} id={otherDescInView ? "otherDesc-active" : undefined}>
                    A collection of a few other things I've built. <span>Everything is fully mobile responsive.</span>
                </p>
                <div className="other-items">
                    {otherData.map((data) => (
                        <OtherItem key={data.id} data={data} />
                    ))}
                </div>
            </div>
            <div className="ending-work-this-wrapper"></div>
        </div>
    )
}

export default Work
