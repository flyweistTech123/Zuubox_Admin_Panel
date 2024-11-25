import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import img from '../../assest/sidelogo.png'
import img1 from '../../assest/logosvg.svg'
import { MdHome } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";

import { TfiMapAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


const Sidebar = () => {

    const sidebarItems = [
        {
            name: "Dashboard",
            icon: <MdHome  />,
            link: "/dashboard"
        },
        {
            name: "Logo",
            icon: <MdHome  />,
            link: "/job-management"
        },
        {
            name: "Cell",
            icon: <LuBarChart2 />,
            link: "/orders"
        },
        {
            name: "Places",
            icon: <FaLocationDot />,
            link: "/voucher-Offers"
        },
        {
            name: "Skill Catagory",
            icon: <GiSkills />,
            link: "/banner-Management"
        },
        {
            name: "Cell’s Details",
            icon: <PiMicrosoftExcelLogoBold />,
            link: "/wallet-management"
        },
        {
            name: "Site Map",
            icon: <TfiMapAlt />,
            link: "/FAQ"
        },
        {
            name: "Users",
            icon: <FaUser />,
            link: "/privacypolicy"
        },
        {
            name: "About us",
            icon: <IoMdInformationCircle />,
            link: "/chats"
        },
        {
            name: "Slider Video",
            icon: <GoDeviceCameraVideo />,
            link: "/payments"
        },
        {
            name: "User Cell",
            icon: <BsFileEarmarkSpreadsheet />,
            link: "/timesheet-Management"
        },
        {
            name: "Website Background",
            icon: <AiOutlineGlobal />,
            link: "/termsconditions"
        },

    ];


    return (
        <>
            <div className='sidebarcontainer'>
                <div className='sidelogo'>
                    <div className='sidelogo1'>
                        <img src={img} alt="Logo" />
                    </div>
                </div>
                <div className='sideitems'>
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.link}
                            to={item.link}
                            className={({ isActive }) =>
                                isActive ? 'sideitemactive' : 'sideitem'
                            }
                        >
                            {item.icon}
                            <p>{item.name}</p>
                        </NavLink>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Sidebar