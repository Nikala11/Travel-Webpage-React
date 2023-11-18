import React, { useEffect } from 'react'
import './main.css'
import { Data } from '../../data'
// Import React-icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
// Aos - Scroll animation
import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
    // Add scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='main container section'>
            <div className='secTitle'>
                <h3 data-aos="fade-right" className='title'>Most visited destinations</h3>
            </div>
            <div className='secContent grid'>
                {/* Using map method with data */}
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div data-aos="fade-up" className='singleDestination' key={id}>
                                {/* It's return single id from the map array */}
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        Details <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main