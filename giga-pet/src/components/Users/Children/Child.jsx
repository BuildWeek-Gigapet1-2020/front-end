import React from "react";
import { Link } from "react-router-dom";
// import ChildProfile from "../ChildProfile";

import styled from "styled-components";

function Child(props) {
  console.log("child component props", props);

  return (
    <ContainerDiv>
      {/* <Route exact path={`/api/child/${props.child.id}`} component={ChildProfile} /> */}
      <div className="edit-delete">
        <button className="btn-left">Edit</button>
        <button className="btn-right">Delete</button>
      </div>
      <Link
        className="child-card"
        to={{
          pathname: `child/${props.child.id}`,
          state: { id: props.child.id, name: props.child.name }
        }}
      >
        <h1>{props.child.name}</h1>
      </Link>
    </ContainerDiv>
  );
}

export default Child;

const ContainerDiv = styled.div`
  border: 1px solid green;
  // width: 20%;
  // display: flex;

  .child-card {
    border: 1px solid red;
  }
`;
