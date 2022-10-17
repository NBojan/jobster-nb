import styled from "styled-components";
import { useEffect } from "react";
import { FormRow, FormSelect } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addJob, clearValues, editJob, updateValues } from "../../features/job/JobSlice";
import { toast } from "react-toastify";

const AddJob = () => {
    const { position, company, jobLocation, status, jobType, statusOptions, jobTypeOptions, isLoading, isEditing, editId } = useSelector(store => store.job);
    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const clear = () => dispatch(clearValues());

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(updateValues({name, value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!position || !company || !jobLocation){
            toast.error("Please fill out all values.");
            return
        }
        if(isEditing){
            dispatch(editJob({id: editId, job: {position, company, jobLocation, jobType, status}}));
            return
        }
        dispatch(addJob({position, company, jobLocation, jobType, status}));
    }
    
    useEffect(() => {
        if(!isEditing){
            dispatch(updateValues({name: "jobLocation", value: user.location}));
        }
    }, [])

    return (  
        <Wrapper className="containerBoot m-auto">
            <form onSubmit={handleSubmit} className="box-shadow">
                <h3 className="fw-400 mb-32 capitalize">{isEditing ? "edit job" : "add job"}</h3>
                <div className="inside-form">
                    <FormRow type="text" name="position" value={position} handleChange={handleChange} />
                    <FormRow type="text" name="company" value={company} handleChange={handleChange} />
                    <FormRow type="text" name="jobLocation" value={jobLocation} labelText="job location" handleChange={handleChange} />
                    <FormSelect name="status" value={status} handleChange={handleChange} list={statusOptions} />
                    <FormSelect name="jobType" value={jobType} labelText="job type" handleChange={handleChange} list={jobTypeOptions} />
                    <div className="btn-div">
                        <button type="button" className="btn clear-btn" onClick={clear}>
                            {isLoading ? "Loading" : isEditing ? "stop editing" : "clear"}
                        </button>
                        <button type="submit" className="btn btn-prim save-btn" disabled={isLoading}>{isLoading ? "Loading" : "Submit"}</button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 32px 0;

    form {
        background-color: #fff;
        border-radius: 4px;
        padding: 48px 32px;
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
        justify-content: space-between;
        transition: margin-top .2s linear;
        button {
            flex-basis: 48%;
            font-size: 16px;
            padding: 8px 12px;
            letter-spacing: .5px;
            text-transform: capitalize;
        }
    }
    .clear-btn {
        color: #fff;
        background-color: var(--clr-grey-5);
    }
    .clear-btn:hover {
        background-color: var(--clr-black);
    }


    @media (max-width: 1199px){
        .inside-form {
            div {
                flex-basis: 49%;
            }
        }
        
    }
    @media (max-width: 991px){
        .inside-form {
            div {
                flex-basis: 100%;
            }
        }
        .btn-div {
            height: auto;
            margin-top: 8px;
        }
    }
`
export default AddJob;