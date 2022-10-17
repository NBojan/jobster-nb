import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteJob, setEditing } from "../features/job/JobSlice";

const Job = ({ _id:id, company, createdAt, jobLocation, jobType, position, status }) => {
    const date = format(parseISO(createdAt), "PP");
    const dispatch = useDispatch();

    return (  
        <Wrapper className="box-shadow">
            <header>
                <div className="job-logo">{company.charAt(0)}</div>
                <div>
                    <h4 className="fw-400 capitalize position">{position}</h4>
                    <p className="company capitalize">{company}</p>
                </div>
            </header>
            
            <div className="content">
                <div className="content-center">
                    <div className="d-flex align-center item-center">
                        <FaLocationArrow />
                        <p className="ml-16">{jobLocation}</p>
                    </div>
                    <div className="d-flex align-center item-center">
                        <FaCalendarAlt />
                        <p className="ml-16">{date}</p>
                    </div>
                    <div className="d-flex align-center item-center">
                        <FaBriefcase />
                        <p className="ml-16">{jobType}</p>
                    </div>
                    <div className="item-center status-div">
                        <p className={`${status} btn btn-m`}>{status}</p>
                    </div>
                </div>

                <footer className="d-flex">
                    <Link to="/add-job" type="btn" className="btn btn-m edit-btn" onClick={() => {
                        dispatch(setEditing({editId: id, position, company, jobLocation, jobType, status}))
                    }}>
                        Edit
                    </Link>
                    <button type="btn" className="btn btn-m delete-btn" onClick={() => dispatch(deleteJob(id))}>Delete</button>
                </footer>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    flex-basis: 49%;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 26px;

    header {
        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-bottom: 1px solid var(--clr-grey-9);
        .job-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background-color: var(--clr-primary-5);
            font-size: 24px;
            border-radius: 4px;
            margin-right: 32px;
            text-transform: capitalize;
            width: 60px;
            height: 60px;
            font-weight: bold;
        }
        .company {
            color: var(--clr-grey-6);
            letter-spacing: 1px;
        }
    }

    
    

    .content {
        padding: 16px 24px;
    }

    .content-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .item-center {
        flex-basis: 50%;
        text-transform: capitalize;
        margin-bottom: 16px;
        svg {
            color: var(--clr-grey-6);
        }
        p {
            letter-spacing: 1px;
        }
    }

    .status-div {
        
    }

    .edit-btn {
        background-color: var(--clr-green-light);
        color: var(--clr-green-dark);
        margin-right: 8px;
    }
    .edit-btn:hover {
        background-color: var(--clr-green-dark);
        color: var(--clr-green-light);
    }
    .delete-btn {
        background-color: var(--clr-red-light);
        color: var(--clr-red-dark);
    }
    .delete-btn:hover {
        background-color: var(--clr-red-dark);
        color: var(--clr-red-light);
    }

    
    .pending {
        background: #fcefc7;
        color: #e9b949;
    }
    .interview {
        background: #e0e8f9;
        color: #647acb;
    }
    .declined {
        color: #d66a6a;
        background: #ffeeee;
    }


    @media (max-width: 1199px) and (min-width: 992px){
        .item-center {
            flex-basis: 100%;
        }
    }

    @media (max-width: 991px){
        flex-basis: 100%;
    }
    @media (max-width: 575px){
        .item-center {
            flex-basis: 100%;
        }
    }
`
export default Job;