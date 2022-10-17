import styled from 'styled-components';
import Logo from './Logo';
import { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';

const Navbar = () => {
    const { user } = useSelector(store => store.user);
    const [showLogout, setShowLogout] = useState(false);
    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleSidebar());

    return (  
        <Wrapper>
            <div className="containerBoot m-auto d-flex space-between align-center navCont">
                <button type="button" className='burger-btn' onClick={toggle}><FaAlignLeft /></button>
                
                <h3 className='nav-text'>Dashboard</h3>
                <div className='logo-div'><Logo /></div>
                
                <div className="user">
                    <button type='button' className='user-btn btn btn-m btn-prim' onClick={() => setShowLogout(!showLogout)}>
                        <FaUserCircle />
                        <span>{user.name || ""}</span>
                        <FaCaretDown />
                    </button>

                    <div className={showLogout ? "logout show-logout" : "logout"}>
                        <button type="button" onClick={() => dispatch(logoutUser("Logged out successfully."))}>Logout</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgb(0,0,0,0.1);
    padding: 31.5px 0;

    .logo-div {
        display: none;
        img {
            width: 100px;
        }
    }

    .burger-btn {
        display: flex;
        background-color: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        font-size: 28px;
        cursor: pointer;
    }

    .nav-text {
        font-weight: 400;
        margin-bottom: 0;
    }
    
    .user {
        position: relative;
    }
    .user-btn {
        display: flex;
        align-items: center;
        font-size: 16px;
        position: relative;
        z-index: 2;
        span {
            margin: 0 4px;
        }
    }

    .logout {
        position: absolute;
        background-color: var(--clr-primary-1);
        padding: 8px;
        width: 100%;
        border-radius: 4px;
        text-align: center;
        top: 0;
        visibility: hidden;
        transition: all .2s linear;
        button {
            color: var(--clr-primary-5);
            background-color: transparent;
            border: transparent;
            font-size: 16px;
            letter-spacing: 1px;
            padding: 2px 4px;
            transition: all .3s ease-in;
            cursor: pointer;
        }
        button:hover {
            color: var(--clr-primary-7);
        }
    }
    .show-logout {
        top: 40px;
        visibility: visible;
    }

    @media (max-width: 991px){
        .nav-text {
            display: none;
        }
        .logo-div {
            display: block;
        }
    }
    @media (max-width: 575px){
        .user-btn {
            padding: 4px 10px;
            font-size: 15px;
        }
        .burger-btn {
            font-size: 24px;
        }
    }
`
export default Navbar;