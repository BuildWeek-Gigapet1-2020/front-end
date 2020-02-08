import React from "react";
import styled from "styled-components";

function Parent(props) {
  //   const [name, setName] = useState("");
  return (
    <ContainerDiv>
      <h1>Hello, {props.name}!</h1>
    </ContainerDiv>
  );
}

export default Parent;

const ContainerDiv = styled.div`
  h1 {
    font-size: 4rem;
  }
`;
