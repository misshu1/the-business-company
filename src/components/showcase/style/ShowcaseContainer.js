import styled from "styled-components";

const ShowcaseContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    margin: 0 auto;

    @media (min-width: 50rem) {
        && {
            width: 50rem;
        }
    }
`;

export default ShowcaseContainer;
