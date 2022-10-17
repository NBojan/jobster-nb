import styled from "styled-components";
import image from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (  
        <Wrapper className="centerFlex containerBoot m-auto">
            <div className="container">
                <img src={image} alt="Not Found" />
                
                <div className="text ta-center mt-24">
                    <h3 className="fw-400">Ohh! Page Not Found</h3>
                    <p>We can't seem to find the page you're looking for.</p>
                    <Link to="/" className="btn btn-s btn-prim">Back Home</Link>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    .container {
        max-width: 600px;
    }

    img {
        width: 100%;
    }
    
    p {
        color: var(--clr-grey-4);
        margin-bottom: 12px;
    }
`
export default ErrorPage;