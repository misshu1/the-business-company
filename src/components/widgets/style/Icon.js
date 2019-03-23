import styled from "styled-components";

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24vw;
    height: 24vw;
    font-size: 12vw;
    color: #fff;

    @media (min-width: 25rem) {
        && {
            min-width: 6rem;
            height: 100%;
            font-size: 3rem;
        }
    }
`;

export default Icon;