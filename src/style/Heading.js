import styled from "styled-components";

const H2 = styled.h2`
  margin: 0;
`

export const Heading = (props) => {
    return <H2>{props.children}</H2>
}