import styled from "styled-components";
import { Logo, NavLinks } from "./index";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";

const SmallSidebar = () => {
    const { sidebarOpen } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const toggle = () => dispatch(toggleSidebar());

    return (  
        <Wrapper className={sidebarOpen ? "show-small" : ""}>
            <div className="content">
                <button type="button" className="close-btn" onClick={toggle}><FaTimes /></button>
                <div className="mb-32"><Logo /></div>
                <NavLinks toggle={toggle} />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    display: none;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: all .2s linear;

    @media (max-width: 991px){
        display: flex;
    }
    
    .content {
        width: 90%;
        height: 90%;
        background-color: #fff;
        border-radius: 4px;
        padding: 64px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .close-btn {
        position: absolute;
        left: 16px;
        top: 16px;
        color: var(--clr-red-dark);
        background-color: transparent;
        border: transparent;
        font-size: 32px;
        transition: all .2s linear;
        cursor: pointer;
    }
    .close-btn:hover {
        color: var(--clr-red);
    }
`
export default SmallSidebar;