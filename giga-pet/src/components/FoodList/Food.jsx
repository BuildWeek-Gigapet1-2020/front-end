import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Food(props) {
  // console.log("Food component props", props);
  return (
    <ContainerDiv>
      <div className="edit-delete">
        <Link to={{ pathname: `/edit-food/${props.food.name}`, state: {id: props.id, name: props.name, created_at: props.created_at, updated_at: props.updated_at, child_id: props.child_id, type: props.type, servings: props.servings}  }}>
          <button className="btn-left">
            <p>Edit</p>
          </button>
        </Link>

        <button className="btn-right">
          <p>Delete</p>
        </button>
      </div>
      {/* <h4>food id: {props.food.id}</h4> */}
      <h1>Food Name: {props.food.name}</h1>
      <h2>Food Type: {props.food.type}</h2>
      <h3>Serving Size: {props.food.servings}</h3>
    </ContainerDiv>
  );
}

export default Food;

const ContainerDiv = styled.div`
  .edit-delete {
    display: flex;
    justify-content: center;
    margin-top: 5%;

    .btn-left {
      margin-right: 5%;
    }
  }
`;


// to={{ pathname: `/edit-food/${props.id}`, state: {id: props.id, name: props.name, created_at: props.created_at, updated_at: props.updated_at, child_id: props.child_id, type: props.type, servings: props.servings}  }}