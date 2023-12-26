import styled from "styled-components";

const Div = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = (props) => {
    return <Div>{props.children}</Div>
}