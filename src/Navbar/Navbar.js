import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Logo from '../Images/logo.png'
import { Fragment, useEffect, useState } from 'react'

function Navbar() {
    const navigate = useNavigate()
    const closeNav = () => setNavActive(false)
    const [navActive, setNavActive] = useState(false)
    useEffect(() => {navActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [navActive])
    function handleLogoClick() {
        navigate('/contact')
        closeNav()
    }
    return (
        <Fragment>
            <p className="navbar-toggle-button" onClick={() => setNavActive(!navActive)}>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
                <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
            </p>
            <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
                <div className="navbar-top">
                    <img src={Logo} alt="JV" onClick={() => handleLogoClick()} />
                    <h1>Joshua Venegas</h1>
                    <p>B.S. Pre-Med</p>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/" activeClassName="active" className="nav-link"><h1 id='first-nav-link'>About Me</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/skills" activeClassName="active" className="nav-link"><h1>Qualifications</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/work" activeClassName="active" className="nav-link"><h1>Clinical Experience</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/algorithms" activeClassName="active" className="nav-link"><h1>Extracurriculars</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/blogs" activeClassName="active" className="nav-link"><h1>Journal Articles</h1></NavLink></li>
                    <li className="nav-item" onClick={() => closeNav()}><NavLink to="/contact" activeClassName="active" className="nav-link"><h1>Contact Me</h1></NavLink></li>
                </ul>
                <div className="navbar-bottom">
                    <a href="https://www.linkedin.com/in/servantforlife/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='nav-icon'/></a>
                    <a href="https://github.com/davidmvenegas" target="_blank" rel="noopener noreferrer"><FaGithub className='nav-icon'/></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
