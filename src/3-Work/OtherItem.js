import './otheritem.css'
import Modal from './Modal/OtherModal'
import ImgModal from './Modal/ImageModal'
import ImagesIcon from '../Images/images.png'
import { useState } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

function OtherItem({data}) {
    const [open, setOpen] = useState(false)
    const [otherItemRef, otherItemInView] = useInView({threshold: 0, triggerOnce: true})
    const [modalID, setModalID] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openImgModal, setOpenImgModal] = useState(false)

    function handleOpenModal(id) {
        setOpenImgModal(false)
        setModalID(id)
        setOpenModal(true)
    }
    function handleOpenImgModal(id) {
        setOpenModal(false)
        setModalID(id)
        setOpenImgModal(true)
    }
    return (
        <div className={open ? "other-item active" : "other-item"}>
            <Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID}/>
            <ImgModal open={openImgModal} setOpenModal={setOpenImgModal} modalID={modalID}/>
            <div className='other-item-top' onClick={open ? () => setOpen(false) : () => setOpen(true)}>
                <div className="other-item-img-wrap">
                    <img src={data.image} alt='Img' id={otherItemInView ? "otherItem-active" : undefined}/>
                </div>
                <h1 id={data.largeTitle ? "smaller-other-title" : undefined} ref={otherItemRef}>{data.title}</h1>
            </div>
            <div className="other-item-bottom">
                <div className='other-item-link' onClick={() => handleOpenModal(1)}>Daily Journal &nbsp;<BsBoxArrowUpRight id='other-link-icon'/></div>
                <div className='other-item-github' onClick={() => handleOpenImgModal(1)}><img src={ImagesIcon} alt='ImageIcon' id='other-item-github'/></div>
            </div>
        </div>
    )
}

export default OtherItem;
