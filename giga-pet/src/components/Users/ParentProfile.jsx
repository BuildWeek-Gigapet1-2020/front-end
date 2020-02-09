import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Parent from "./Parents/Parent";
// import Monster from './Children/Monster';
import Child from "./Children/Child";

import { useSelector, useDispatch } from "react-redux";
import { loadChildren } from "../../redux/actions/childActions";

import styled from "styled-components";

function ParentProfile(props) {
  console.log("Parent profile props", props);
  const childState = useSelector(state => state.childReducer);
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(loadChildren(props));
  }, [dispatch]);

  console.log("childState from ParentProfile", childState);

  return (
    <ContainerDiv>
      {/* <Parent name={props.history.location.state.credentials.parent_name} /> */}
      <h1>Parent Profile</h1>
      <Link to="add-child">Add Child</Link>
      <div className="child-container">
        {childState.children.map((entry, index) => {
          return (
            <div className="child-info" key={index}>
              <Child
                // setLoading={setLoading}
                child={entry}
                index={index}
                className="child-component"
              />
            </div>
          );
        })}
      </div>
    </ContainerDiv>
  );
}

export default ParentProfile;

const ContainerDiv = styled.div`
  .child-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;
