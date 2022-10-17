import styled from "styled-components";

const FormSelect = ({name, value, handleChange, labelText, list}) => {
    return (  
        <Wrapper className="form-row">
            <label htmlFor={name}>{labelText || name}</label>
            <select name={name} id={name} value={value} onChange={handleChange}>
                {list.map((item,index) => <option key={index} value={item}>{item}</option>)}
            </select>
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
    select {
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
export default FormSelect;