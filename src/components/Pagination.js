import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { changePage } from "../features/allJobs/allJobsSlice";

const Pagination = () => {
    const { numberOfPages, page } = useSelector(store => store.allJobs);
    const dispatch = useDispatch();

    let pageNumbers = [];
    for(let i=0;i<numberOfPages;i++){
        pageNumbers.push(i+1);
    }

    const nextPage = () => {
        let newPage = page + 1;
        if(newPage > numberOfPages) newPage = 1;
        dispatch(changePage(newPage));
    }
    const prevPage = () => {
        let newPage = page - 1;
        if(newPage < 1) newPage = numberOfPages;
        dispatch(changePage(newPage));
    }
    console.log(page)
    return (  
        <Wrapper>
            <div className="buttons-container d-flex">
                <button type="button" className="btn btn-l lr-btn" onClick={prevPage}>
                    <HiChevronDoubleLeft />
                    <span className="ml-4">Prev</span>
                </button>

                <div className="pages-cont">
                    {pageNumbers.map(pageNr => (
                        <button type="button" className={`btn btn-l page-btn ${pageNr === page && "active"}`} key={pageNr} onClick={() => dispatch(changePage(pageNr))}>
                            {pageNr}
                        </button>
                    ))}
                </div>

                <button type="button" className="btn btn-l lr-btn" onClick={nextPage}>
                    <span className="mr-4">Next</span>
                    <HiChevronDoubleRight />
                </button>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.article`
    margin: 16px 0;
    display: flex;
    justify-content: flex-end;

    .lr-btn {
        display: flex;
        align-items: center;
        background-color: #fff;
        color: var(--clr-primary-5);
    }
    .lr-btn:hover {
        color: #fff;
        background-color: var(--clr-primary-5);
    }

    .pages-cont {
        background-color: var(--clr-primary-1);
        border-radius: 4px;
        margin: 0 16px;
    }
    .page-btn {
        color: var(--clr-primary-5);
        font-weight: bold;
    }
    .page-btn:hover,
    .active {
        color: #fff;
        background-color: var(--clr-primary-5);
    }

    @media (max-width: 575px){
        justify-content: stretch;

        .buttons-container {
            flex-direction: column;
            align-items: flex-start;
        }

        .pages-cont {
            margin: 16px 0;
        }
    }
`
export default Pagination;