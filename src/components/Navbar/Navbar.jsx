import React from 'react'
import './Navbar.css'

import { IoSearch } from "react-icons/io5";
import img from '../../assest/Avatar.png'

const Navbar = () => {
    return (
        <>
            <div className='navbarcontainer'>
                <div className='navbarleft'>
                    <h6>Hello, <span>Admin 1</span></h6>
                    <h5>Dashboard</h5>
                </div>
                <div className='navbarright'>
                    <div className='navbarrightsearchbox'>
                        <div className='searchbarnavbar'>
                            <IoSearch color='#000000'/>
                            <input type="search" placeholder='Search'/>
                        </div>
                        <div className='navbarprofile'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar