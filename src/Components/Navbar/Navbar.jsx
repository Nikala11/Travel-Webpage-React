import React, { useState } from "react";
import './navbar.css'
// Import React-icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { SlPlane } from "react-icons/sl";

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    // Function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    // Function to remove navbar
    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <button className="logo flex">
                        <h1><SlPlane className="icon"/> Travel.</h1>
                    </button>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <button className="navLink">Home</button>
                        </li>
                        <li className="navItem">
                            <button className="navLink">Packages</button>
                        </li>
                        <li className="navItem">
                            <button className="navLink">Shop</button>
                        </li>
                        <li className="navItem">
                            <button className="navLink">About</button>
                        </li>
                        <li className="navItem">
                            <button className="navLink">Pages</button>
                        </li>
                        <li className="navItem">
                            <button className="navLink">News</button>
                        </li>
                        <li className="navItem">
                            <button className="navLink">Contact</button>
                        </li>

                        <button className="btn">
                            <span>BOOK NOW</span>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar