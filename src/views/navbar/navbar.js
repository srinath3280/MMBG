import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const localstorage = window.localStorage.getItem("token");
    function LogOut(){
        window.localStorage.removeItem("token");
        navigate('/');
    }
    return (
        <div>
            {
                !localstorage ?
                    <nav className='NavBar'>
                        <div className='NavBar-logo'>
                            <img src='/images/mmbg_logo.webp' alt='' />
                        </div>
                        <div className='NavBar-links'>
                            <ul>
                                <li>
                                    <a href='/class'>Home</a>
                                </li>
                                <li>
                                    <a href='/'>Contact</a>
                                </li>
                                <li>
                                    <a href='/login' className='btn'>Login</a>
                                </li>
                                <li>
                                    <a href='/register' className='btn'>SignUp</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    :
                    <nav className='NavBar'>
                        <div className='NavBar-logo'>
                            <img src='/images/mmbg_logo.webp' alt='' />
                        </div>
                        <div className='NavBar-links'>
                            <ul>
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                <li>
                                    <a href='/class'>Classes</a>
                                </li>
                                <li>
                                    <a href='/'>Chat</a>
                                </li>
                                <li>
                                    <a href='/'>Reading</a>
                                </li>
                                <li>
                                    <a href='/' className='btn' onClick={()=>LogOut()}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            }



        </div>
    )
}

export default NavBar
