import './otherModal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'

function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "My Simple Wardrobe.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            features: ["Guest checkout", "Product review system", "Personal order history", "256-bit AES encryption"],
            link: "www.mysimplewardrobe.com",
            url: "https://www.mysimplewardrobe.com/",
            github: "https://github.com/davidmvenegas/my-simple-wardrobe",
            video: "https://www.youtube.com/embed/ZwveyK1Ag60"
        }
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
                            <a className='modal-visit-btn' href={currentData?.url} target="_blank" rel="noreferrer">MORE DETAILS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
