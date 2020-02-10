import React from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
// import ChildProfile from "../ChildProfile";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadChildren } from "../../../redux/actions/childActions";

function Child(props) {
  console.log("child component props", props);
  const dispatch = useDispatch();

  const deleteChild = () => {
    api()
      .delete(`/api/child/${props.child.id}`)
      .then(res => {
        console.log("delete response: ", res.data);
        dispatch(loadChildren(props));
      })
      .catch(err => {
        console.log("DELETE error message: ", err.response);
      });
  };

  return (
    <ContainerDiv>
      {/* <Route exact path={`/api/child/${props.child.id}`} component={ChildProfile} /> */}
      <div className="edit-delete">
        <Link
          to={{
            pathname: `edit-child/${props.child.id}`,
            state: {
              id: props.child.id,
              name: props.child.name,
              monster_id: props.child.monster_id,
              parent_id: props.child.parent_id
            }
          }}
        >
          <button className="btn-left">Edit</button>
        </Link>
        <button onClick={deleteChild} className="btn-right">
          Delete
        </button>
      </div>
      <Link
        className="child-card"
        to={{
          pathname: `child/${props.child.id}`,
          state: {
            id: props.child.id,
            name: props.child.name,
            monster_id: props.child.monster_id,
            parent_id: props.child.parent_id
          }
        }}
      >
        <h2>{props.child.name}</h2>
      </Link>
    </ContainerDiv>
  );
}

export default Child;

const ContainerDiv = styled.div`
  h2 {
    font-size: 2rem;
  }
`;
