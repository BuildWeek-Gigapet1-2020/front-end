import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Food(props) {
  console.log("Food component props", props);
  return (
    <ContainerDiv>
      <div className="edit-delete">
        <Link to={{ pathname: `/edit-food/${props.id}` }}>
          <button className="btn-left">
            <p>Edit</p>
          </button>
        </Link>

        <button className="btn-right">
          <p>Delete</p>
        </button>
      </div>
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
