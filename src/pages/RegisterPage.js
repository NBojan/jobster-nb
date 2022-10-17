import styled from "styled-components";
import { Logo, FormRow } from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/user/userSlice";

const RegisterPage = () => {
    const [values, setValues] = useState({email: "", password: "", name: "", isMember: true});
    const { user, isLoading } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password, name, isMember} = values;
        if(isLoading) return;
        if(!email || !password || (!isMember && !name)){
            toast.error("Please fill out all fields.");
            return;
        }
        if(!isMember){
            dispatch(registerUser({name, email, password}));
            return;
        }
        dispatch(loginUser({email, password}));
    }

    const toggleMember = () => setValues({...values, isMember: !values.isMember});

    useEffect(() => {
        if(user) navigate("/");
    }, [user])

    return (  
        <Wrapper className="centerFlex">
            <form onSubmit={handleSubmit} className="box-shadow ta-center">
                <div className="d-flex justify-center mb-24"><Logo /></div>
                <h3 className="fw-400 mb-24">{values.isMember ? "Login" : "Register"}</h3>

                {!values.isMember && <FormRow name="name" type="text" value={values.name} handleChange={handleChange} />}
                <FormRow name="email" type="email" value={values.email} handleChange={handleChange} />
                <FormRow name="password" type="password" value={values.password} handleChange={handleChange} />

                <button type="submit" className="btn btn-m btn-prim mt-16" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
                <button type="button" className="btn btn-m btn-light" disabled={isLoading}>{isLoading ? "Loading..." : "Demo App"}</button>            

                {values.isMember ? 
                    <p>Not a member yet? <span onClick={toggleMember}>Register</span></p>
                :
                    <p>Already a member? <span onClick={toggleMember}>Login</span></p>
                }
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    form {
        width: 90%;
        max-width: 400px;
        background-color: #fff;
        padding: 32px 40px;
        border-top: 5px solid var(--clr-primary-5);
        border-radius: 4px;
    }

    button {
        width: 100%;
        box-shadow: var(--light-shadow);
        margin-bottom: 16px;
        font-size: 16px;
        font-family: var(--bodyFont);
    }

    p {
        letter-spacing: 0.5px;
        span {
            color: var(--clr-primary-5);
            cursor: pointer;
            transition: all .2s linear;
        }
        span:hover {
            color: var(--clr-primary-7)
        }
    }

`
export default RegisterPage;