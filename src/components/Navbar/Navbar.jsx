import React, { useState } from 'react'
import nav from '../../css/Navbar.module.css'

import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

import img from '../../assest/profilepic.jpg'
import { useNavigate } from 'react-router-dom';
import { DeleteSuccessfullyModal, SuccessfullyModal } from '../Modals/Modals';

const Navbar = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    const handlemodal = () => {
        setShow1(true)
        setTimeout(() => {
            setShow1(false);
            navigate('/')
        }, 2000);
    }
    return (
        <>
            <DeleteSuccessfullyModal
                show={show}
                handleClose={() => setShow(false)}
                handleshow={handlemodal}
                text="Logout"
            />
            <SuccessfullyModal
                show={show1}
                handleClose={() => setShow1(false)}
                text="Successfully Logged out"
            />
            <div className={nav.navbarcontainer}>
                <div className={nav.navbarsubcontainer}>
                    <div className={nav.navsearchbarcotainer}>
                        <div className={nav.searchbarnav}>
                            <IoSearchSharp color='#8A8A8A' size={20} />
                            <input type="seach" placeholder='Search' />
                        </div>
                    </div>

                    <div className={nav.secondpartnav}>
                        <div className={nav.notificationicon} onClick={() => navigate('/notifications')}>
                            <IoMdNotificationsOutline color='#282828' size={25} />
                            <div className={nav.notificationicon1}>
                                <FaCircle color='#2D88D4' size={13} />
                            </div>
                        </div>
                        <div className={nav.logoutnav} onClick={() => setShow(true)}>
                            <p>Log out</p>
                        </div>
                        <div className={nav.profilepic} onClick={() => navigate('/adminprofile')}>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar