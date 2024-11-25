import React from 'react'
import '../../css/Login.css'

import img from '../../assest/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='logincontainer'>
                <div className='loginsubcontainer'>
                    <div className='loginlogocontainer'>
                        <div className='loginlogo'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='loginadmin'>
                        <h1>Admin Login</h1>
                    </div>
                    <div className='logininputs'>
                        <div className='logininputsemail'>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder='Enter your email'
                            />
                        </div>
                        <div className='logininputsemail'>
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                placeholder='Enter your Password'
                            />
                        </div>
                        <div className='loginforget'>
                            <p onClick={()=>navigate('/forgetpassword')}>Forget Password ?</p>
                        </div>
                    </div>

                    <div className='loginbutton'>
                        <button  onClick={()=>navigate('/dashboard')}>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login