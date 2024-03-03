import React, { useEffect } from 'react'
import './footer.css'
// Import video
import video2 from '../../Assets/Videos/video2.mp4'
// Import React-icons
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
// Aos - Scroll animation
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    // Add scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Keep in touch</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            Send <FiSend className="icon" />
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <button className='logo flex'>
                                <MdOutlineTravelExplore className="icon" /> Travel.
                            </button>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iusto? Nisi vel id reiciendis at recusandae, blanditiis fugiat molestiae natus maxime quam, aut, sint dolorem dolor iste. Debitis, vero incidunt?
                        </div>
                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/* Group One */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">Our Agency</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Payment
                            </li>
                        </div>
                        {/* Group Two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">Partners</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> TripAdvisor
                            </li>
                        </div>
                        {/* Group Three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">Last Minute</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Paris
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Madrid
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Rome
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>Best Travel Website</small>
                        <small>&copy; Copyrights Reserved 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer