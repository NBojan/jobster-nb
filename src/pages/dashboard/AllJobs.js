import styled from "styled-components";
import { AllJobsCont, SearchContAll } from "../../components";

const AllJobs = () => {
    return (  
        <Wrapper className="all-jobs-page containerBoot m-auto">
            <SearchContAll />
            <AllJobsCont />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 16px 0;
`
export default AllJobs;