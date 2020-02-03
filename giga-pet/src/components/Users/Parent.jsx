import React, { useState /*, useEffect */ } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { login } from "../../redux/actions/userActions";

function Parent(props) {
  const [parent] = useState({
    parent_name: props.parent_name
  });

  console.log("Parent card props", props);
  //   const [name, setName] = useState("");
  return (
    <ContainerDiv>
      <h1>Parent Card</h1>
      <h1>{parent.parent_name}</h1>
      {/* <h1>{props.name}</h1> */}
    </ContainerDiv>
  );
}

function mapStateToProps(state) {
  console.log("login state", state);
  return {
    parent_name: state.userReducer.parent_name
  };
}

export default connect(mapStateToProps, { login })(Parent);

const ContainerDiv = styled.div``;
