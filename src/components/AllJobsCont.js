import styled from "styled-components";
import { useEffect } from "react";
import { Job, Pagination } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../features/allJobs/allJobsSlice";

const AllJobsCont = () => {
    const { jobs, totalJobs, isLoading, search, searchStatus, searchType, sort, page  } = useSelector(store => store.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [search, searchStatus, searchType, sort, page])

    if(isLoading){
        return <div className="loading"></div>
    }
    if(jobs.length < 1){
        return (
            <Wrapper>
                <h3 className="fw-400">No jobs to display...</h3>
            </Wrapper>
        )
    }
    return (  
        <Wrapper>
            <h4 className="mb-24">{totalJobs} job{totalJobs !== 1 && "s"} found</h4>
            <div className="jobs">
                {jobs.map(job => <Job key={job._id} {...job} />)}
            </div>
            <Pagination />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .jobs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`
export default AllJobsCont;