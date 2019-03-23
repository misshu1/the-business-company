import styled from "styled-components";

const ExpandButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: auto;

    && button {
        background: transparent;
        color: #53b8c4;
        border: none;
        outline: none;
        font-size: 12vw;
    }

    @media (min-width: 25rem) {
        && button {
            font-size: 3rem;
        }
    }
`;

export default ExpandButton;
