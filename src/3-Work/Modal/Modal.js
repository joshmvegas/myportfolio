import './modal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import OneImage from '../../Images/clinical-experience-images/1.png'
import TwoImage from '../../Images/clinical-experience-images/2.png'
import ThreeImage from '../../Images/clinical-experience-images/3.png'
import OneShadow from '../../Images/clinical-experience-images/1Shadow.png'
import TwoShadow from '../../Images/clinical-experience-images/2Shadow.png'
import ThreeShadow from '../../Images/clinical-experience-images/3Shadow.png'
import OneIntern from '../../Images/clinical-experience-images/1Intern.png'
import TwoIntern from '../../Images/clinical-experience-images/2Intern.png'
import ThreeIntern from '../../Images/clinical-experience-images/3Intern.png'

function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "MedEx Academy",
            desc: "MedEx is an unmatched intensive program that exposes a hand-picked group of healthcare-minded undergraduates to the medical field. The experience is organized into multiple tiers, providing resources for graduate school applicants while placing a special focus on developing the AAMC Core Competencies in each participant.",
            features: ["50 hrs of patient interaction at a geriatric hospital", "Crafted and delivered oral presentations", "Engaged in diversity training", "Challenged critical thinking through ethics seminars"],
            image1: OneImage,
            image2: TwoImage,
            image3: ThreeImage,
            url: "https://academics.prismahealth.org/academics/education/medex-academy",
        },
        {id: 2, 
            title: "Clinical Shadowing",
            desc: "I shadowed Dr. Carles on multiple occasions in the summer of 2021 and spring of 2022, a time during which I got to know dozens of patients, RNs, NPs and other physicians. Along the way, I became familiar with many of a family doctor's challenges including medication nonadherance, work-life balance, and insurance company correspondance.", 
            features: ["Interacted with patients of all ages and backgrounds", "Developed a close relationship with Dr. Carles", "Observed various minimally invasive procedures", "Calmed infants and assisted the immobile"],
            image1: OneShadow,
            image2: TwoShadow,
            image3: ThreeShadow,
            url: "https://www.chapinfamilypractice.com/our-team/doctor/details/4341/javier-e-carles-md",
        },
        {id: 3, 
            title: "Medical Internship",
            desc: "This experience is a Pre-Med requirement at Bob Jones University, designed to introduce each aspiring health professional to a variety of specialties and encounters. By the end of the semester, I had compiled over 40 hours of shadowing in 10 different departments, each of which I worked to maximize by engaging with the various practitioners.",
            features: ["Scrubbed in for operations in the OR", "Assisted with emergencies in a level 1 trauma center", "Analyzed hundreds of CAT scans, X-rays, and MRIs", "Took patients from pre-op to post-op in anesthesiology"],
            image1: OneIntern,
            image2: TwoIntern,
            image3: ThreeIntern,
            url: "https://www.bju.edu/academics/programs/premed-predent/",
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
