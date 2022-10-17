import styled from "styled-components";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggle }) => {
    return (  
        <Wrapper className="nav-links">
            {links.map(link => {
                const { id, text, path, icon } = link;
                return (
                    <NavLink to={path} key={id} onClick={toggle} end>
                        {icon}
                        <span className="ml-16">{text}</span>
                    </NavLink>
                )
            })}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    a {
        display: flex;
        align-items: center;
        padding: 16px 0;
        font-size: 16px;
        text-transform: capitalize;
        letter-spacing: 1px;
        color: var(--clr-grey-5);
        transition: all .2s linear;
        span {
            transition: all .2s linear;
        }
        svg {
            font-size: 28px;
            transition: all .2s linear;
        }
    }
    a:hover,
    .active {
        span {
            color: var(--clr-black);
        }
        svg {
            color: var(--clr-primary-5);
        }
    }
`
export default NavLinks;