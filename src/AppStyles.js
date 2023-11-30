import styled from "styled-components";

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    min-width: 100vw;
    min-height: 100vw;
    box-sizing: border-box;
    padding: 30px;
    .header {
        /* background-color: red; */
        background-color: ${(props) => props.theme.bgColorHeader};
        color: ${(props) => props.theme.txColorHeader};
    }
    .main {
        background-color: ${(props) => props.theme.bgColorMain};
        color: ${(props) => props.theme.txColorMain};
    }
    .aside {
        background-color: ${(props) => props.theme.bgColorAside};
        color: ${(props) => props.theme.txColorAside};
    }
    .card-component {
        background-color: ${(props) => props.theme.bgColorWidget};
        color: ${(props) => props.theme.txColorWidget};
    }
    .footer {
        background-color: ${(props) => props.theme.bgColorFooter};
        color: ${(props) => props.theme.txColorFooter};
    }
`;

export default Wrapper;
