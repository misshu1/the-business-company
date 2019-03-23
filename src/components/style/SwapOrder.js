import styled from "styled-components";

const SwapOrder = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 63.75rem) {
        flex-direction: column-reverse;
    }
`;

export default SwapOrder;
