import styled from "styled-components";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormSelect, FormRow } from "./index";
import { clearFilters, updateValues } from "../features/allJobs/allJobsSlice";

const SearchContAll = () => {
    const [localSearch, setLocalSearch] = useState("");
    const { search, searchStatus, searchType, sort, sortOptions, isLoading } = useSelector(store => store.allJobs);
    const { statusOptions, jobTypeOptions } = useSelector(store => store.job);
    const dispatch = useDispatch();

    const handleSearch = () => {
        let timeoutId;
        return (e) => {
            setLocalSearch(e.target.value);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                dispatch(updateValues({name: "search", value: e.target.value }));
            }, 500);
        }
    }
    const optimizedSearch = useMemo(() => handleSearch(), []);

    const handleChange = e => {
        if(isLoading) return
        const name = e.target.name;
        const value = e.target.value;
        dispatch(updateValues({name, value}));
    }

    const handleSubmit = e => e.preventDefault();

    return (  
        <Wrapper>
            <form className="box-shadow" onSubmit={handleSubmit}>
                <h4 className="fw-400 capitalize mb-24">search form</h4>
                <div className="inside-form">
                    <FormRow type="text" name="search" value={localSearch} handleChange={optimizedSearch} />
                    <FormSelect name="searchStatus" value={searchStatus} labelText="status" handleChange={handleChange} list={["all", ...statusOptions]} />
                    <FormSelect name="searchType" value={searchType} labelText="type" handleChange={handleChange} list={["all", ...jobTypeOptions]} />
                    <FormSelect name="sort" value={sort} handleChange={handleChange} list={sortOptions} />
                    <div className="btn-div">
                        <button type="button" className="btn save-btn delete-btn" onClick={() => {
                            setLocalSearch("");
                            dispatch(clearFilters());
                        }} disabled={isLoading}>
                            {isLoading ? "loading..." : "clear filters"}
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 32px;
    margin-bottom: 48px;

    form {
        background-color: #fff;
        border-radius: 4px;
        padding: 32px 40px;
    }

    .inside-form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div {
            flex-basis: 32%;
        }
    }

    .btn-div {
        height: 69px;
        display: flex;
        align-items: flex-end;
        transition: margin-top .2s linear;
    }
    .save-btn {
        width: 100%;
        font-size: 16px;
        padding: 8px 12px;
        letter-spacing: .5px;
        text-transform: capitalize;
    }
    .delete-btn {
        background-color: var(--clr-red-light);
        color: var(--clr-red-dark);
    }
    .delete-btn:hover {
        background-color: var(--clr-red-dark);
        color: var(--clr-red-light);
    }

    @media (max-width: 1199px){
        .inside-form {
            div {
                flex-basis: 49%;
            }
        }
        .btn-div {
            height: auto;
            margin-top: 8px;
        }
    }
    @media (max-width: 991px){
        .inside-form {
            div {
                flex-basis: 100%;
            }
        }
    }
`

export default SearchContAll;