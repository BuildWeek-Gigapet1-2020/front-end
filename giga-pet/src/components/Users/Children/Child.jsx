import React from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
// import ChildProfile from "../ChildProfile";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadChildren } from "../../../redux/actions/childActions";

import orange from "../../../images/mon-orange-two.png";
import red from "../../../images/mon-red-four.png";
import green from "../../../images/mon-teal-one.png";
import pink from "../../../images/mon-pink-three.png";
import purple from "../../../images/mon-purple.png";

function Child(props) {
  console.log("child component props", props);
  const dispatch = useDispatch();

  const monster_id = props.child.monster_id;
  console.log("monster_id variable", monster_id);
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
      <div className="child-box">
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

        <img src={monster_id == 1 ? orange : null} alt="" />
        <img src={monster_id == 2 ? red : null} alt="" />
        <img src={monster_id == 3 ? green : null} alt="" />
        <img src={monster_id == 4 ? purple : null} alt="" />

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
      </div>
    </ContainerDiv>
  );
}

export default Child;

const ContainerDiv = styled.div`
  // border: 1px solid red;
  .child-box {
    background-color: rgb(255, 255, 255, 0.35);
    padding: 0% 0% 4% 0%;
    margin: 5%;
    border-radius: 25px;

    a {
        text-decoration: none;
      }

    .edit-delete {
      display: block;


      .btn-left, .btn-right {
        background-color: #74b456;
        border: 1px solid #4b8f29;
        font-family: "Bubblegum Sans", cursive;
        height: 30px;
        width: 42%;
        padding: 2% 7% 10% 6%;
        margin: 3%;
        border-radius: 10px;
        -webkit-box-shadow: 2px 7px 8px 0px rgba(72,119,61,1);
        -moz-box-shadow: 2px 7px 8px 0px rgba(72,119,61,1);
        box-shadow: 2px 7px 8px 0px rgba(72,119,61,1);
        color: white;
        font-size: 1.2rem;
      }
      
      
    }

    img {
        margin-top: 5%;
        height: 130px;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 0px;
        color: #ffffff;
        text-shadow 2px 2px #74b456;
      }

}



  
  

  
  
  
`;
