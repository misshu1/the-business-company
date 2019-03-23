import styled from "styled-components";

const Backdrop = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
    display: ${props => (props.login === "open" ? "block" : "none")};
`;

export default Backdrop;
