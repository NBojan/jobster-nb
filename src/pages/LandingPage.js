import styled from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import landingImg from "../assets/images/main.svg";

const LandingPage = () => {
    return (  
        <Wrapper className="containerBoot m-auto">
            <nav>
                <Logo />
            </nav>

            <article className="d-flex align-center space-between">
                <div className="hero">
                    <h1 className="mb-24">Job <span>Tracking</span> App</h1>
                    <p>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. 
                        Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link to="/register" className="btn btn-m btn-prim">Login/Register</Link>
                </div>

                <div className="img-div lh-0">
                    <img src={landingImg} alt="Landing Image" className="landingImg" />
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    nav {
        display: flex;
        align-items: center;
        height: 96px;
    }

    article {
        min-height: calc(100vh - 96px);
        margin-top: -48px;
    }

    div {
        flex-basis: 48%;
    }

    .hero {
        span {
            color: var(--clr-primary-5);
        }
        p {
            color: var(--clr-grey-4);
            line-height: 2;
            margin-bottom: 18px;
        }
        a {
            font-size: 20px;
        }
    }

    .landingImg {
        width: 100%;
    }

    @media (max-width: 991px){
        .img-div {
            display: none;
        }
        div {
            flex-basis: 100%;
        }
    }
    @media (max-width: 575px){
        .hero {
            p {
                font-size: 15px;
            }
            a {
                font-size: 18px;
            }
        }
    }
`
export default LandingPage;