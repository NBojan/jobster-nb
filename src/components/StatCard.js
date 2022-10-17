import styled from "styled-components";

const StatCard = ({ title, count, icon, color, bcg }) => {

    return (  
        <Wrapper color={color} bcg={bcg}>
            <div className="d-flex space-between align-center mb-24">
                <h2 className="count">{count}</h2>
                <div className="icon-div">{icon}</div>
            </div>

            <h4 className="title">{title}</h4>
        </Wrapper>
    );
}
const Wrapper = styled.article`
    flex-basis: 32%;
    background-color: #fff;
    padding: 32px;
    border-radius: 4px;
    border-bottom: 5px solid ${props => props.color};
    transition: margin-bottom .2s ease-in-out;

    .count {
        color: ${props => props.color};
        margin-bottom: 0;
    }
    .icon-div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 60px;
        border-radius: 4px;
        background-color: ${props => props.bcg};;
        color: ${props => props.color};
        svg {
            font-size: 28px;
        }
    }
    .title {
        font-weight: 400;
        text-transform: capitalize;
    }

    @media (max-width: 1199px){
        flex-basis: 49%;
        margin-bottom: 24px;
    }
    @media (max-width: 767px){
        flex-basis: 100%;
        margin-bottom: 32px;
    }
`
export default StatCard;