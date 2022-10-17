import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import styled from "styled-components";

const SharedDashboard = () => {
    return (  
        <Wrapper>
            <main>
                <BigSidebar />
                <SmallSidebar />

                <div className="main-cont">
                    <Navbar />

                    <div className="outlet-container">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    main {
        display: flex;
    }
    .main-cont {
        width: 100%;
    }



    .show-small {
        opacity: 1;
        visibility: visible;
        z-index: 10;
    }
    .show-big {
        margin-left: 0;
    }
`
export default SharedDashboard;