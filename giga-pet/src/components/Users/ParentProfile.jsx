import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Parent from "./Parents/Parent";
// import Monster from './Children/Monster';
import Child from "./Children/Child";

import { useSelector, useDispatch } from "react-redux";
import { loadChild } from "../../redux/actions/childActions";

import styled from "styled-components";

function ParentProfile(props) {
  console.log("Parent profile props", props);
  const child = useSelector(state => state.childReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChild());
  }, [dispatch]);

  console.log("child from ParentProfile", child);

  return (
    <ContainerDiv>
      <Parent name={props.history.location.state.credentials.parent_name} />
      <div className="child-container">
        {child &&
          child.map((entry, index) => {
            return (
              <div className="child-info" key={index}>
                <Child
                  child={entry}
                  index={index}
                  className="child-component"
                />
              </div>
            );
          })}
      </div>
      <Link to="add-child">Add Child</Link>
    </ContainerDiv>
  );
}

export default ParentProfile;

const ContainerDiv = styled.div`
  .child-container {
    display: flex;
  }
`;
