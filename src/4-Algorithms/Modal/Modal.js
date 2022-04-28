import './modal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import AfterImg from './After.png'
import BeforeImg from './Before.png'
import OneLogo from '../../Images/portfolio-logos/2.png'
import TwoLogo from '../../Images/portfolio-logos/2.png'
import ThreeLogo from '../../Images/portfolio-logos/3.png'

function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "Crisis Counselor",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 2, 
            title: "Blood Donor Ambassador",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 3, 
            title: "University Yearbook Writer",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 4, 
            title: "MedEx Campus Ambassador",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 5, 
            title: "Sports & Fitness",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 6, 
            title: "Sleight-of-Hand Magic",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 7, 
            title: "Foreign Language",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 8, 
            title: "Culinary Arts",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 9, 
            title: "Proprietor of Venegas Yard Care",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 10, 
            title: "Head Biology Lab Assistant",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 11, 
            title: "BJU PMA President",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
        },
        {id: 12, 
            title: "Discipleship Group Leader",
            paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!", 
            paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quis? Ratione, at exercitationem optio tempore, expedita quis pariatur, porro numquam nulla voluptatem voluptates consequatur facilis culpa enim! Cumque laborum, et incidunt, perspiciatis voluptatibus dignissimos nihil cum quasi repellendus commodi possimus!",
            image1: OneLogo, image2: TwoLogo, image3: ThreeLogo
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
        <div key={currentData?.id} className='extraModal-container' style={open ? null : {display: "none"}}>
            <ImCross id="extraLeave-modal" onClick={() => setOpenModal(false)}/>
            <div className="extraModal-wrapper">
                <div className="extraModal-image-wrapper">
                    {currentData?.id === 9 ? 
                        // DO THIS
                        <div className='extraYard'>
                            <div className='extraYardWrap'>
                                <h1>One of my Landscaping Projects:</h1>
                                <p>Drag slider to see the difference</p>
                                <div className="extraYardImgCompare">
                                    <ReactCompareSlider 
                                        itemOne={<ReactCompareSliderImage src={AfterImg}/>}
                                        itemTwo={<ReactCompareSliderImage src={BeforeImg}/>}
                                    />
                                </div>
                            </div>
                        </div>
                        : // OR DO THIS
                        <div className="extraImages-wrapper">
                            <img src={currentData?.image1} alt="Logo" />
                            <img src={currentData?.image2} alt="Logo" />
                            <img src={currentData?.image3} alt="Logo" />
                        </div>
                    }
                </div>
                <div className="extraModal-text-box">
                    <div className="extraModal-text-wrapper">
                        <h1 className="extraModal-title">{currentData?.title}</h1>
                        <p className="extraModal-description">{currentData?.paragraph1}</p>
                        <p className="extraModal-description">{currentData?.paragraph2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
