import './modal.css'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import AfterImg from './After.png'
import BeforeImg from './Before.png'
import CTLImage from '../../Images/extracurricular-images/CTL.png'
import RedCrossImage from '../../Images/extracurricular-images/RedCross.png'
import VintageImage from '../../Images/extracurricular-images/Vintage.png'
import MagicImage from '../../Images/extracurricular-images/Magic.png'
import MedexImage from '../../Images/extracurricular-images/Medex.png'
import SportsImage from '../../Images/extracurricular-images/Sports.png'
import CodingImage from '../../Images/extracurricular-images/Coding.png'
import CookingImage from '../../Images/extracurricular-images/Cooking.png'
import LabImage from '../../Images/extracurricular-images/Lab.png'
import DGImage from '../../Images/extracurricular-images/DG.png'
import PMAImage from '../../Images/extracurricular-images/PMA.png'

function Modal({open, setOpenModal, modalID}) {
    useEffect(() => {open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    const modalData = [
        {id: 1, 
            title: "Crisis Counselor",
            paragraph1: "When Covid-19 shut the world down early in 2020, I began to look online for a volunteer experience that I could invest in over the summer. Counseling for Crisis Text Line was the perfect solution, allowing me to connect dynamically with individuals who needed support without the requirement of traveling to a physical location.", 
            paragraph2: "Since that summer, I've had the incredible honor of chatting with over 350 texters, working through issues like suicidal ideation, isolation, and eating disorders. Not every conversation ends perfectly, and sometimes the job can be draining. Yet the countless rewarding moments are well worth the effort it takes to turn a hot moment into a cool calm.",
            image: CTLImage
        },
        {id: 2, 
            title: "Blood Donor Ambassador",
            paragraph1: "I started working with the Red Cross as a junior in high school, marking the start of one of my first long-term volunteer experiences. My responsibility as a blood donor ambassador was simple - help the blood donors with everything... except the actual donation process. That, I thought to myself, was something I could do.",
            paragraph2: "I assisted donors with preliminary forms, helped answer general questions, and - my favorite part - got to hand out prizes and snacks at the end. In the process, I had the chance to work with dozens of incredible volunteers and nurses, each of whom was invested in the common goal of providing life-saving resources to those in need.",
            image: RedCrossImage
        },
        {id: 3, 
            title: "University Yearbook Writer",
            paragraph1: "Writing on the copy team for Vintage, Bob Jones University's official yearbook, has been a special opportunity. While striving to capture unique, long-lasting memories for our peers and professors, we've learned how to collaborate on a team that maximizes each member's individual talents in writing, photography, and design.", 
            paragraph2: "Better yet, I've grown close to a group of individuals that I otherwise wouldn't normally cross paths with, helping me appreciate the multi-dimensional nature of a liberal arts education. While I decided to move on from Vintage after two years of service, I truly appreciate the experience, the relationships, and the impact it has made on my writing skills.",
            image: VintageImage
        },
        {id: 4, 
            title: "MedEx Campus Ambassador",
            paragraph1: "After completing a summer in Tier 3 of MedEx Academy, I was both impressed and excited with how valuable the program was for undergraduate students looking for medical exposure. Having been given the chance to participate in such a memorable experience, it was an honor to be able to represent and promote the program on campus.", 
            paragraph2: "I worked with three other ambassadors to spread awareness about MedEx among my peers. We gave informational seminars for student clubs, organized application help sessions, and held interview workshops throughout the year. To round out the process, we assisted the program's admissions staff by holding zoom interviews for students from other schools.",
            image: MedexImage
        },
        {id: 5, 
            title: "Sports & Fitness",
            paragraph1: "Playing sports and working out are two of my favorite ways to keep the mind and body healthy, especially during the stress of a busy semester. Though I'm a basketball player at heart (you'll find me on the court weekly, especially when the intermural season rolls around), I'll play any sport if it lets me spend time with friends.", 
            paragraph2: "In addition, crafting and following daily workout routines has helped me stay disciplined and focused while motivating me to eat and sleep well. This combination of exercise, healthy eating, and prioritizing sleep has allowed me to remain efficient and driven throughout college, testifying to the power of setting and maintaining good habits.",
            image: SportsImage
        },
        {id: 6, 
            title: "Sleight-of-Hand Magic",
            paragraph1: "Since I was a young child, I loved performing simple card tricks for my family and friends. As I grew older, I began to use it as an icebreaker with strangers, relishing the joy of making someone laugh in amazement. In high school, however, I realized that card magic could be much more than an icebreaker or a simple hobby.", 
            paragraph2: "There's a unique moment of cheerfulness that comes when you realized you've been fooled by a good card trick. It's universal - from kids at my birthday party performances to elderly folks in a geriatric hospital, a magician's talent can invariably be used to provide an unexpected blessing. A mysterious blessing, of course - we magicians never reveal our secrets.",
            image: MagicImage
        },
        {id: 7, 
            title: "Computer Programming",
            paragraph1: "One of my most recent pursuits has been to learn how to code and design websites with JavaScript, the most popular front-end programming language in the world. In fact, the website you're perusing right now is the product of a joint project of mine with my incredibly talented younger brother David - a fullstack software dev.", 
            paragraph2: "Begininng in the fall of 2021, we've collaborated to design and publish this portfolio from scratch. While I'm still just a beginner when it comes to computer programming, I've learned an incredible amount from David in the dozens of hours that we've spent building, modifying, and adapting joshvenegas.com together.",
            image: CodingImage
        },
        {id: 8, 
            title: "Culinary Arts",
            paragraph1: "Food is a wonderful thing. It has a unique way of being able to communicate both creativity and culture, all while fulfilling a basic need. My siblings and I were taught to cook before we started high school, preparing balanced, delicious meals that are often infused with a dash of my family's Puerto Rican heritage.", 
            paragraph2: "An avid fisherman, I find that preparing a meal from a fresh catch is extremely satisfying. Appropriately, seafood is my specialty, but much of the enjoyment that I get from cooking involves experimenting with new cuisines and techniques. So if you're ever in my area and craving a fresh bowl of arroz con pollo, grilled salmon, or custard flan, be sure to drop by and share a meal!",
            image: CookingImage
        },
        {id: 9, 
            title: "Proprietor of Venegas Yard Care",
            paragraph1: "For 6 years, I've run a small landscaping business in my hometown. I believe that the best workers have only one gear - a combination of hard work and patience. By carrying a vision for every project, my guarantee to each client is to surpass expectations, going the extra mile to produce strikingly aesthetic home property.", 
            paragraph2: "VYC is dedicated to transformation, diligence, and loyalty; long-term clients are the core of my business. These relationships are the benefit of established credibility and mutual respect, both of which have been earned by building trust the hard way. No need to call a commercial business - where there's a will, a rake, and a chainsaw, there's a way!",
            // NO IMAGE NEEDED HERE
        },
        {id: 10, 
            title: "Head Biology Lab Assistant",
            paragraph1: "During the semester, I work with a team of peers to provide a smooth scientific learning experience for students and lab instructors. There's nothing glamorous about washing dishes, prepping and breaking down labs, or offering guidance to inquisitive students, but I've come to love the position over the years.", 
            paragraph2: "While working in the lab, I've grown extremely close to my coworkers, forming one of the tightest circles of friends that I've had in college. Additionally, the experience of managing a team that serves an essential role in the education of hundreds of students each semester has been a special privilege, maturing and challenging me in ways I had never anticipated.",
            image: LabImage
        },
        {id: 11, 
            title: "BJU PMA President",
            paragraph1: "Just before the end of the 2022 spring semester, my classmates elected me to lead our university's Pre-Medical Association for the 2022-2023 academic school year. Though this experience will be a new one, I'm fortunate to have an excellent, experienced officer crew working alongside me to brainstorm and organize events.", 
            paragraph2: "My goal is for the PMA to promote a unified, engaged spirit between its members while sparking a passion for the healthcare field in each individual. We'll work to accomplish this by organizing meals, trips, special speaker events, and workshops with current medical students, building relationships and providing opportunities for valuable connections along the way.",
            image: PMAImage
        },
        {id: 12, 
            title: "Discipleship Group Leader",
            paragraph1: "During my time as an upperclassman, I've been blessed with the opportunity to mentor 10 young men on my dormitory hall by working to foster maturity, discipline, and conflict-resolving skills in thier lives. Outside of our official meetings 2-3 times a week, our daily proximity to each other provides unique opportunities for constructive friendship and growth.", 
            paragraph2: "I will always be indebted to the faithful mentors that have poured thier time and energy into my life, particularly my parents and professors. This kind of sacrificial servanthood is something that I hope to pass on to the men in my discipleship group, each of whom will likely have opportunities for leadership and influence in the future.",
            image: DGImage
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
                            <img src={currentData?.image} alt="Logo" />
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
