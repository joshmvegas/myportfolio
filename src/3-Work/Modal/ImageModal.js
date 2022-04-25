import './imageModal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import OneLogo from '../../Images/portfolio-logos/1.png'
import TwoLogo from '../../Images/portfolio-logos/2.png'
import ThreeLogo from '../../Images/portfolio-logos/3.png'
import NumFour from '../../Images/atlassian.png'
import NumFoura from '../../Images/Before.jpg'
import NumFourb from '../../Images/After.jpg'
import NumFourc from '../../Images/flatiron_cert.png'

function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "My Simple Wardrobe.",
            images: [
                {img: OneLogo, caption: 'one thing to say'},
                {img: TwoLogo, caption: 'two thing to say'},
                {img: ThreeLogo, caption: 'two thing to say'},
                {img: NumFour, caption: 'two thing to say'},
                {img: NumFoura, caption: 'two thing to say'},
                {img: NumFourb, caption: 'two thing to say'},
                {img: NumFourc, caption: 'two thing to say'}
            ]
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
                    {/* {currentData?.images?.map(curImg => (
                    <div>
                        <img src={curImg?.img} alt="Img" />
                        <p className="legend">{curImg?.caption}</p>
                    </div>
                    ))} */}
            </div>
        </div>
    )
}

export default Modal;
