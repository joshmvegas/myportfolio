import './modal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import OneLogo from '../../Images/portfolio-logos/2.png'
import TwoLogo from '../../Images/portfolio-logos/2.png'
import ThreeLogo from '../../Images/portfolio-logos/3.png'

function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "My Simple Wardrobe.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            features: ["Guest checkout", "Whatever i want", "Personal order history", "256-bit AES encryption"],
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo,
            url: "https://www.mysimplewardrobe.com/",
        },
        {id: 2, 
            title: "Grocery Magix",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            features: ["Millions of recipes", "Over 30 recipe search filters", "Secure Register/Login system", "Fully responsive"],
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo,
            url: "https://www.grocerymagix.com/",
        },
        {id: 3, 
            title: "The Financial Tracker",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            features: ["Transaction ledger", "Monthly budget", "Adjustable savings goals", "Fully Responsive"],
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo,
            url: "https://www.thefinancialtracker.com/",
        },
    ]
    useEffect(() => {
        if (modalID !== null) {
            const currentID = modalData.findIndex(x => x.id === modalID)
            setCurrentData(modalData[currentID])
        }
        if (!open) setCurrentData({})
    // eslint-disable-next-line
    }, [modalID, open])
    const [currentData, setCurrentData] = useState({})
    return (
        <div key={currentData?.id} className='modal-container' style={open ? null : {display: "none"}}>
            <ImCross id="leave-modal" onClick={() => setOpenModal(false)}/>
            <div className="modal-wrapper">
                <div className="modal-video-wrapper">
                    <div className="iframe-wrapper">
                        <img src={currentData?.image1} alt="Logo" />
                        <img src={currentData?.image2} alt="Logo" />
                        <img src={currentData?.image3} alt="Logo" />
                    </div>
                </div>
                <div className="modal-text-wrapper">
                    <div className="modal-header">
                        <div className="modal-title-wrapper">
                            <h1 className="modal-title">{currentData?.title}</h1>
                        </div>
                    </div>
                    <div className="modal-body">
                        <p className="modal-description">{currentData?.desc}</p>
                        <p className="modal-features-header">Some things I did:</p>
                        <ul className="modal-features">
                            {currentData?.features?.map(feature => (
                                <li className="modal-feature">{feature}</li>
                            ))}
                        </ul>
                        <div className="modal-visit-site">
                            <a className='modal-visit-btn' href={currentData?.url} target="_blank" rel="noreferrer">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
