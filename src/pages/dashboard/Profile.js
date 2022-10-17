import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";
import { FormRow } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
    const { user, isLoading } = useSelector(store => store.user);
    const [userValues, setUserValues] = useState({
        name: user.name || "",
        lastName: user.lastName || "",
        location: user.location || "",
        email: user.email || ""
    })
    const {name, lastName, location, email} = userValues;
    const dispatch = useDispatch();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setUserValues({...userValues, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!name || !lastName || !location || !email){
            console.log("wtf")
            toast.error("Please fill out all fields.");
            return;
        }
        dispatch(updateUser({name, lastName, email, location}));
    }

    return (  
        <Wrapper className="containerBoot m-auto">
            <form onSubmit={handleSubmit} className="box-shadow">
                <h3 className="fw-400 mb-32">Profile</h3>
                <div className="inside-form">
                    <FormRow type="text" name="name" value={name} handleChange={handleChange} />
                    <FormRow type="text" name="lastName" value={lastName} labelText="Last Name" handleChange={handleChange} />
                    <FormRow type="email" name="email" value={email} handleChange={handleChange} />
                    <FormRow type="text" name="location" value={location} handleChange={handleChange} />
                    <div className="btn-div">
                        <button type="submit" className="btn btn-prim save-btn" disabled={isLoading}>{isLoading ? "Loading" : "save changes"}</button>
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
        transition: margin-top .2s linear;
    }
    .save-btn {
        width: 100%;
        font-size: 16px;
        padding: 8px 12px;
        letter-spacing: .5px;
        text-transform: capitalize;
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
export default Profile;