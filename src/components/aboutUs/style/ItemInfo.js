import styled from "styled-components";

const ItemInfo = styled.div`
    box-sizing: border-box;
    display: ${props => (props.show ? "block" : "none")};
    width: 7.5rem;
    background: #53b8c4;
    color: #fff;
    padding: 1rem 0.5rem;
`;

export default ItemInfo;
