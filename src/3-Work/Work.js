import './work.css'
import { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Modal from './Modal/Modal'
import OneLogo from '../Images/portfolio-logos/1.png'
import TwoLogo from '../Images/portfolio-logos/2.png'
import ThreeLogo from '../Images/portfolio-logos/3.png'

function Work() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    // const navigate = useNavigate()
    const [modalID, setModalID] = useState(null)
    const [openModal, setOpenModal] = useState(false)
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
                    <span>&nbsp;—Benjamin&nbsp;</span>
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
                                Devoted to developing medical professionals with Prisma Health at the USC School of Medicine in Greenville, this summer experience both challenged and inspired me.
                                <br />
                                The connections and relationships that I developed here have deepened my respect and love for medicine while helping me recognize the value of peer and mentor support.
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
        </div>
    )
}

export default Work
