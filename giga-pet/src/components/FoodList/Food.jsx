import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Food(props) {
  // console.log("Food component props", props);
  return (
    <ContainerDiv>
      <div className="edit-delete">
        <Link
          to={{
            pathname: `/edit-food/${props.food.name}`,
            state: {
              id: props.id,
              name: props.name,
              created_at: props.created_at,
              updated_at: props.updated_at,
              child_id: props.child_id,
              type: props.type,
              servings: props.servings
            }
          }}
        >
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
  display: block;
  

  .btn-left, .btn-right {
    background-color: #74b456;
    border: 1px solid #4b8f29;
    font-family: "Bubblegum Sans",cursive;
    width: 39%;
    margin: 3%;
    border-radius: 10px;
    -webkit-box-shadow: 2px 7px 8px 0px rgba(72,119,61,1);
    -moz-box-shadow: 2px 7px 8px 0px rgba(72,119,61,1);
    box-shadow: 2px 7px 8px 0px rgba(72,119,61,1);
    color: white;
    font-size: 1.2rem;
    padding: 2%;

    p {
      padding: 0px;
      margin: 0px;
    }
  }
`;

// to={{ pathname: `/edit-food/${props.id}`, state: {id: props.id, name: props.name, created_at: props.created_at, updated_at: props.updated_at, child_id: props.child_id, type: props.type, servings: props.servings}  }}
