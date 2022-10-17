import styled from "styled-components";

const FormRow = ({name, type, value, handleChange, labelText}) => {
    return (  
        <Wrapper className="form-row">
            <label htmlFor={name}>{labelText || name}</label>
            <input type={type} name={name} value={value} onChange={handleChange}/>
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    margin-bottom: 16px;

    label {
        display: block;
        text-align: left;
        color: var(--clr-grey-2);
        letter-spacing: 1px;
        margin-bottom: 8px;
        text-transform: capitalize;
    }
    input {
        display: block;
        width: 100%;
        background-color: var(--clr-mainBack);
        border: 1px solid var(--clr-grey-8);
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 16px;
        font-family: var(--bodyFont);
        letter-spacing: .5px;
    }
`
export default FormRow;