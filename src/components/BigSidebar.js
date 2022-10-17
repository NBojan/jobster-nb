import styled from "styled-components";
import { Logo, NavLinks } from "./index";
import { useSelector } from "react-redux";

const BigSidebar = () => {
    const { sidebarOpen } = useSelector(store => store.user);

    return (  
        <Wrapper className={sidebarOpen ? "" : "show-big"}>
            <div className="logo-cont">
                <Logo />
            </div>

            <NavLinks />
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    position: sticky;
    top: 0;
    width: 260px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 1px 0 0 0 rgb(0,0,0,0.1);
    margin-left: -260px;
    transition: all .2s linear;

    @media (max-width: 991px){
        display: none;
    }

    .logo-cont {
        padding: 23px 0;
        margin-bottom: 32px;
        img {
            margin: 0 auto;
        }
    }

    .nav-links a {
        padding-left: 40px;
    }
    .nav-links a:hover {
        background-color: var(--clr-grey-10);
        padding-left: 48px;
    }
`
export default BigSidebar;